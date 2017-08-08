import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginFormModel, User } from './shared/model'
import { SSOService } from './sso.service'

@Injectable()
export class GuardService {
    private logined: boolean
    constructor(private router: Router) {}
    public isLoggedIn() {
        return this.logined
    }

    public canActivate(): boolean {
        return Boolean(this.user);
    }
}