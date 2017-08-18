import { Injectable } from '@angular/core'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import { FilmService } from '../../film.service'
import { People } from '../model'
import { ErrorService, ErrorType } from '../../error.service'

@Injectable()
export class PeopleDetailResolver implements Resolve<People> {
    constructor(
        private filmService: FilmService,
        private errorService: ErrorService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<People> {
        return  this.filmService.getPerson(route.paramMap.get('id'))
            .catch(err => {
                this.errorService.onError(err, ErrorType.Critical)
                return Observable.throw(err)
            })
    }
}