export enum UserRole {
    User,
    Admin
}

export type User = {
    email: string
    password: string
    role: UserRole
}