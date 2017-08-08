import { Injectable } from '@angular/core';
import { LoginFormModel, User } from './shared/model'
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http'

@Injectable()
export class SSOApiService {
  private data: Observable<User>
  constructor(private http: Http) {}
  public signIn(loginForm: LoginFormModel) {
    //временный код для имитации запроса на бекенд
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
    const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/
    if(loginForm.email.match(emailRegex) && loginForm.password.match(passRegex)) {
      //Не знаю как создать фейковый Observable, делаем почти реальный запрос
      return this.http.get('assets/user')
        .map(res => res.json() || null)
        .catch(err => Observable.throw(err))
    }
    //Не знаю как создать фейковый Observable, делаем почти реальный запрос
    return this.http.get('assets/nouser').map(res => null)
  }
  

}
