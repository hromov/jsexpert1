import { Injectable } from '@angular/core'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import { FilmService } from '../../film.service'
import { Credits } from '../model'
//import { ErrorService, ErrorType } from '../error.service'

@Injectable()
export class CastResolver implements Resolve<Credits> {
    constructor(
        private filmService: FilmService
        //private errorService: ErrorService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Credits> {
        return  this.filmService.getCredits(route.paramMap.get('id'))
    }
}