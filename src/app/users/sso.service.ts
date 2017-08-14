import { Injectable } from '@angular/core'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { User } from './user.model'
import { LoginFormModel } from '../login/login.model'
import { Subject }    from 'rxjs/Subject'
import { SSOApiService } from './sso-api.service'

@Injectable()
export class SSOService {
  constructor(private ssoApiService: SSOApiService) {}
  private CurrentUserChangedSource: ReplaySubject<User | null> = new ReplaySubject<User>(1);
  public CurrentUserChanged$: Observable<User | null> = this.CurrentUserChangedSource.asObservable();
  public signIn(loginForm: LoginFormModel) {
    this.ssoApiService.signIn(loginForm)   
      .subscribe(user => this.CurrentUserChangedSource.next(user))
  }

  public signOut() {
    this.CurrentUserChangedSource.next(undefined)
  }

}