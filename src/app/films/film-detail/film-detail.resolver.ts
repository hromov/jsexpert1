import { Injectable } from '@angular/core'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import { FilmService } from '../../film.service'
import { Film } from '../model'
//import { ErrorService, ErrorType } from '../error.service'

@Injectable()
export class FilmDetailResolver implements Resolve<Film> {
    constructor(
        private filmService: FilmService
        //private errorService: ErrorService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Film> {
        return  this.filmService.getFilmById(route.paramMap.get('id'))
    }
}