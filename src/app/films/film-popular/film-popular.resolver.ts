import { Injectable } from '@angular/core'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import { FilmService } from '../../film.service'
import { FilmList } from '../model'
//import { ErrorService, ErrorType } from '../error.service'

@Injectable()
export class FilmPopularResolver implements Resolve<FilmList> {
    constructor(
        private filmService: FilmService
        //private errorService: ErrorService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FilmList> {
        return this.filmService.getPopularFilms()
    }
}