import { Injectable } from '@angular/core';
import { LoginFormModel, User } from './shared/model'
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http'

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
    //Не знаю как создать фейковый Observable, делаем почти реальный запрос
    return this.http.get('assets/nouser').map(res => null)
  }
  

}
