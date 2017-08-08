import { Component, Inject, InjectionToken, OnInit } from '@angular/core'
import { GuardService } from '../guard.service'
import { LoginFormModel } from './login.model'
import { Router } from '@angular/router'
import { SSOService } from '../sso.service'
import { ErrorToken } from '../shared/errorToken'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginError: boolean
  messages: any
  loginForm: LoginFormModel
  constructor(
    private ssoService: SSOService,
    private router: Router,
    @Inject(ErrorToken) errorMessages: any
  ) {
    this.messages = errorMessages
    ssoService.CurrentUserChanged$.subscribe(user => {
      if(user) {
        this.router.navigate(['/payment'])
      } else {
        this.loginError = true
      }
    })
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data))
    this.onValueChanged()
  }

  onValueChanged(data?: any) {
    if(this.loginForm) {
      const form = this.loginForm;
      for (const field in this.formErrors) {
        this.formErrors[field] = '';
        const control = form.get(field);
  
        if (control && control.dirty && !control.valid) {
          const messages = ValidationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }

  ngOnInit() {
    this.loginForm = new LoginFormModel()
  }

  login() {
    if(this.loginForm.isValid()) {
      this.ssoService.signIn(this.loginForm)
    }
  }

}
