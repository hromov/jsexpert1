import { Injectable } from '@angular/core'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { Observable } from 'rxjs/Observable'
import { User } from './user.model'
import { LoginFormModel } from '../login/login.model'
import { Subject }    from 'rxjs/Subject'
import { SSOApiService } from './sso-api.service'

@Injectable()
export class SSOService {
  constructor(private ssoApiService: SSOApiService) {}
  private CurrentUserSource: ReplaySubject<User | null> = new ReplaySubject<User>(1);
  public CurrentUser$: Observable<User | null> = this.CurrentUserSource.asObservable();
  public signIn(loginForm: LoginFormModel) {
    return this.ssoApiService.signIn(loginForm)
      .map(user => {
        this.CurrentUserSource.next(user)
        return user
      })
  }

  public signOut() {
    this.CurrentUserSource.next(undefined)
  }

}