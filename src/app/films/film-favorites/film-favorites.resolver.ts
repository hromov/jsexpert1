import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { FilmService } from '../../film.service'
import { Film } from '../model'
//import { ErrorService, ErrorType } from '../error.service'

@Injectable()
export class FilmFavoritesResolver implements Resolve<Array<Film>> {
    constructor(
        private filmService: FilmService
        //private errorService: ErrorService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Film>> {
        return  this.filmService.getFavoritesItem()
    }
}
