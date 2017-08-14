import { Injectable } from '@angular/core'
import { User, UserRole } from './user.model'
import { Observable } from 'rxjs/Rx'
import { LoginFormModel } from '../login/login.model'

@Injectable()
export class SSOApiService {
  admin: User = {
    email: 'admin@mail.ua',
    password: 'Pass1234',
    role: UserRole.Admin
  }
  user: User = {
    email: 'user@mail.ua',
    password: 'Pass1234',
    role: UserRole.User
  }
  public signIn(loginForm: LoginFormModel) {
    if (loginForm.email === this.user.email && loginForm.password === this.user.password) {
      return Observable.of(this.user)
    }
    if (loginForm.email === this.admin.email && loginForm.password === this.admin.password) {
      return Observable.of(this.admin)
    }
    return Observable.of(undefined)
  }
}