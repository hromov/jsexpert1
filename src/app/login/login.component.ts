import { Component, Inject, InjectionToken } from '@angular/core';
import { GuardService } from '../guard.service'
import { LoginFormModel } from '../shared/model'
import { Router } from '@angular/router'
import { SSOService } from '../sso.service'
import { ErrorToken } from '../shared/errorToken'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginError: boolean
  messages: any
  constructor(
    private ssoService: SSOService,
    private router: Router,
    @Inject(ErrorToken) errorMessages: any
  ) {
    this.messages = errorMessages
    ssoService.CurrentUserChanged$.subscribe(user => {
      console.log(user)
      if(user) {
        this.router.navigate(['/payment'])
      } else {
        this.loginError = true
      }
    })
  }

  login(loginForm: LoginFormModel) {
    this.ssoService.signIn(loginForm)
  }

}
