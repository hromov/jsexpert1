import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginFormModel } from './shared/model'

@Injectable()
export class GuardService {
    private logined: boolean
    constructor(private router: Router) {}
    public isLoggedIn() {
        //Можно ли вообще в сервисе делать такую переменную или ее можно легко изменить через консоль и т.п.?
        //Или сервис должен всегда делать запрос на сервер и возвращать ответ напрямую? На сколько это может гарантировать защиту страницы?
        return this.logined
    }
    public login(loginForm:LoginFormModel) {
        let emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
        let passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/
        if(loginForm.email.match(emailRegex) && loginForm.password.match(passRegex)) {
            this.logined = true
            this.router.navigate(['/payment'])
        } else {
            this.logined = false
            this.router.navigate(['/'])
        }
    }
}

@Injectable()
export class CanActivatePayment implements CanActivate {
  constructor(private guardService: GuardService) {}
  canActivate() {
    return this.guardService.isLoggedIn();
  }
}