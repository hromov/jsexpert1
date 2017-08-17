import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'
import { User, UserRole } from './user.model'
import { LoginFormModel } from '../login/login.model'
import { SSOService } from './sso.service'

@Injectable()
export class AdminGuardService implements CanActivate {
    user: User
    constructor(private ssoService: SSOService) {
        this.ssoService.CurrentUser$.subscribe((user: User | null) => {
            this.user = user
        })
    }

    public canActivate(): boolean {
        return Boolean(this.user && this.user.role === UserRole.Admin);
    }
}