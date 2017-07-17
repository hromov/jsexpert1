import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginFormModel, User } from './shared/model'
import { SSOService } from './sso.service'

@Injectable()
export class GuardService implements CanActivate {
    user: User
    constructor(
        private ssoService: SSOService
    ) {
        this.ssoService.CurrentUserChanged$.subscribe((user: User | null) => {
            this.user = user
        })
    }

    public canActivate(): boolean {
        return Boolean(this.user);
    }
}