export class LoginFormModel {
    constructor(
        public email?: string,
        public password?: string
    ) {}
}

export class User {
    constructor(
        public name: string
    ) {}
}