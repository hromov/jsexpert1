import { Injectable } from '@angular/core'
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable'
import { FilmService } from '../../film.service'
import { Film } from '../model'
import { ErrorService, ErrorType } from '../../error.service'

@Injectable()
export class FilmDetailResolver implements Resolve<Film> {
    constructor(
        private filmService: FilmService,
        private errorService: ErrorService
    ) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Film> {
        return  this.filmService.getFilmById(route.paramMap.get('id'))
            .catch(err => {
                this.errorService.onError(err, ErrorType.Critical)
                //Такой вариант по факту не вернет в компонент ошибку
                //Если сделать Observable.of(err) вернет, но не ошибкой, а как обычный объект
                //В общем с обработкой ошибки в resolve не разобрался как сделать правильно
                return Observable.throw(err)
            })
    }
}