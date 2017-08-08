import { Injectable } from '@angular/core'
import { User } from './shared/model'
import { Observable } from 'rxjs/Rx'
import { Http } from '@angular/http'
import { LoginFormModel } from './login/login.model'

const userEmail: string = 'user@mail.ua'
const userPassword: string = 'Pass1234'

@Injectable()
export class SSOApiService {
  private data: Observable<User>
  constructor(private http: Http) {}
  public signIn(loginForm: LoginFormModel) {
    if(loginForm.email === userEmail && loginForm.password === userPassword) {
      return this.http.get('assets/user')
        .map(res => res.json() || null)
        .catch(err => Observable.throw(err))
    }
    return Observable.of(undefined)
  }
  

}
