import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { User } from './shared/model'
import { LoginFormModel } from './login/login.model'
import { SSOService } from './sso.service'

@Injectable()
export class GuardService implements CanActivate {
    user: User
    constructor(private ssoService: SSOService) {
        this.ssoService.CurrentUserChanged$.subscribe((user: User | null) => {
            this.user = user
        })
    }

    public canActivate(): boolean {
        return Boolean(this.user);
    }
}