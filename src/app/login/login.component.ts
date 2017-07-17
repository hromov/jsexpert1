import { Component } from '@angular/core';
import { GuardService } from '../guard.service'
import { LoginFormModel } from '../shared/model'
import { Router } from '@angular/router'
import { SSOService } from '../sso.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private ssoService: SSOService,
    private router: Router
  ) {
    ssoService.CurrentUserChanged$.subscribe(user => {
      user && this.router.navigate(['/payment'])
    })
  }

  login(loginForm: LoginFormModel) {
    this.ssoService.signIn(loginForm)
  }

}
