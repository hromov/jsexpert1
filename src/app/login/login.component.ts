import { Component, Inject, InjectionToken, OnInit } from '@angular/core'
<<<<<<< HEAD
import { AdminGuardService } from '../users/guard.service'
import { LoginFormModel } from './login.model'
import { Router } from '@angular/router'
import { SSOService } from '../users/sso.service'
=======
import { GuardService } from '../guard.service'
import { LoginFormModel } from './login.model'
import { Router } from '@angular/router'
import { SSOService } from '../sso.service'
import { ErrorToken } from '../shared/errorToken'
>>>>>>> master

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginError: boolean
<<<<<<< HEAD
  loginForm: LoginFormModel
  constructor(
    private ssoService: SSOService,
    private router: Router
  ) { }
  
=======
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

>>>>>>> master
  ngOnInit() {
    this.loginForm = new LoginFormModel()
  }

  login() {
    if(this.loginForm.isValid()) {
<<<<<<< HEAD
      this.ssoService.signIn(this.loginForm).subscribe(user => {
        if(user) {
          this.router.navigate(['/'])
        } else {
          this.loginError = true
        }
      })
    }
  }
}
=======
      this.ssoService.signIn(this.loginForm)
    }
  }

}
>>>>>>> master
