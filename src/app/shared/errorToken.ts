import { InjectionToken } from '@angular/core'

export const ErrorToken = new InjectionToken('error.messages')

export const ErrorMessages = {
  loginError: 'Логин и пароль неверны',
  emailError: 'Неверный формат email',
  passwordError: 'Неверный формат пароля'
}