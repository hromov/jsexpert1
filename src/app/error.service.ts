import { Injectable } from '@angular/core'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { SnackService } from './snack.service'
import { LanguageService } from './language.service'

export enum ErrorType {
  Critical,
  Shown,
  Hidden
}

export class ErrorMessages {
  ShownHard: string
  ShownSoft: string
  NoInternet: string
}

@Injectable()
export class ErrorService {
  errorMessages: ErrorMessages
  constructor(
    private router: Router,
    private ss: SnackService,
    private ls: LanguageService
  ) {
    ls.getErrors().subscribe(errorMessages => this.errorMessages = errorMessages)
  }
  public onError(err: HttpErrorResponse, errorType: ErrorType = ErrorType.Hidden) {
    switch (errorType) {
      case ErrorType.Critical:
        if (err.status === 400 || err.status === 404 || err.status === 422) {
          this.router.navigate(['/','notfound'])
        } else if (err.status === 0) {
          this.showError(this.errorMessages.NoInternet)
        } else {
          this.showError(this.errorMessages.ShownHard)
        }
        break
      case ErrorType.Shown:
        this.showError(this.errorMessages.ShownSoft)
        break
      default:
        console.error(err)
    }
  }

  private showError(message: string) {
    this.ss.message(message, 10000)
  }
}
