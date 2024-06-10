import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }

  ShowPassword: boolean = false

  LoginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  submit() {
    this.auth.logIn(this.LoginForm.value).subscribe({
      next: (res: any) => {
        console.log(res);
        localStorage.setItem('electorateUserToken', res.id_token)
        this.router.navigate(['/home'])
      }
    })
  }
}
