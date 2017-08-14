import { Injectable } from '@angular/core'

@Injectable()
export class LoginFormModel {
    constructor(
        public email?: string,
        public password?: string,
        public emailRegExp?: RegExp,
        public passwordRegExp?: RegExp
    ) {
        this.passwordRegExp = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).{8,}/
        this.emailRegExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/
    }

    public isValid(): boolean {
        return this.emailRegExp.test(this.email) && this.passwordRegExp.test(this.password)
    }
}