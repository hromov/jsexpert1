import { Component, Inject, InjectionToken, OnInit } from '@angular/core'
import { AdminGuardService } from '../users/guard.service'
import { LoginFormModel } from './login.model'
import { Router } from '@angular/router'
import { SSOService } from '../users/sso.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginError: boolean
  loginForm: LoginFormModel
  constructor(
    private ssoService: SSOService,
    private router: Router
  ) { }
  
  ngOnInit() {
    this.loginForm = new LoginFormModel()
  }

  login() {
    if(this.loginForm.isValid()) {
      this.ssoService.signIn(this.loginForm).subscribe(user => {
        console.log(user)
        if(user) {
          this.router.navigate(['/'])
        } else {
          this.loginError = true
        }
      })
    }
  }
}