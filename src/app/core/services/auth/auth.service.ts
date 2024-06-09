import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ConfigService } from 'src/app/config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private config: ConfigService,
    private http: HttpClient,
    private toast: NbToastrService,
    private route: Router
  ) { }

  logIn(loginObject) {
    return this.http.post(`${this.config.getAPILink()}/api/authenticate`, loginObject)
  }

  LogOut() {
    localStorage.clear();
    this.route.navigate(['/auth']).then(() => window.location.reload());
    this.toast.info('تم انتهاء الجلسة', 'تم انتهاء صلاحية الجلسه ')
  }

  changePassword(passwordObject) {
    return this.http.put(`${this.config.getAPILink()}/api/Users/v1/auth/change-password`, passwordObject)
  }

  getResetPasswordToken(forgotPasswordObject) {
    return this.http.post(`${this.config.getAPILink()}/api/Users/v1/auth/token-request-forgot-password`, forgotPasswordObject)
  }

  getToken() {
    return localStorage.getItem("electorateUserToken");
  }

  resetPassowrd(passwordObject) {
    return this.http.put(`${this.config.getAPILink()}/api/Users/v1/auth/confirm-password-reset`, passwordObject)
  }

  isLoggedin() {
    return !!localStorage.getItem("electorateUserToken") && !!localStorage.getItem("electorateUSerData");
  }


}
