import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, catchError, throwError, finalize } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { AuthService } from '../services/auth/auth.service';
import { ProgressBarServiceService } from '../services/global/progress-bar-service.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(
    private inject: Injector,
    private progressbar: ProgressBarServiceService,
    private toster: NbToastrService,
    private auth: AuthService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.progressbar.isLoading.next(true);
    let authService = this.inject.get(AuthService);
    if (this.auth.getTokenState()) {
      this.auth.LogOut();
    }
    let token = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`,
      },
    });
    return next.handle(token).pipe(
      catchError((error) => {
        if ([401, 403].includes(error.status)) {
          // this.auth.LogOut();
          this.toster.success(' ', "تم إنتهاء الجلسه");
          return throwError(() => error);
        }
        else if (error.status == 404 || error.status == 406) this.toster.info(' ', error.error.message);
        else if (error.status == 500 || error.status == 412 || error.status == 409) this.toster.danger('حدث خطأ', error.error.message);
        else if (error.status == 400) {
          if (error.error.errors)
            error.error.errors.forEach(element => {
              this.toster.warning("تنبية", element.message, {
                duration: 5000
              })
            });

          else this.toster.warning("حدث خطأ", error.error.message)
        } else this.toster.danger('حدث خطأ', 'لم يتمكن النظام من الوصول الى الخادم');

        return throwError(() => error.error);
      }),
      finalize(() => {
        this.progressbar.isLoading.next(false);

      })
    );
  }
}
