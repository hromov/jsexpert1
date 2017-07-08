export class PaymentFormModel {
    constructor(
        public phone?: string,
        public amount?: number,
        public email?: string,
        public card?: number,
        public cvv?: number,
        public month?: number,
        public year?: number,
    ) {}    
}
export class LoginFormModel {
    constructor(
        public email?: string,
        public password?: string
    ) {}
}