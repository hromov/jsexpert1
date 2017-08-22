import { Injectable } from '@angular/core'
import { ReplaySubject } from 'rxjs/ReplaySubject'
import { Observable } from 'rxjs/Observable'
import { Film } from '../model'

@Injectable()
export class FilmAddService {
    private NewFilmsSource: ReplaySubject<Film> = new ReplaySubject<Film>(1);
    public NewFilm$: Observable<Film> = this.NewFilmsSource.asObservable();

    public addNewFilm(film: Film) {
        this.NewFilmsSource.next(film)
    }
}