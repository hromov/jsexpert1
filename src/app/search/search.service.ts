import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
/*
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { SearchFilter } from './shared/model'
*/
@Injectable()
export class SearchService {
    filmNameChanged: EventEmitter<string>;
    
    constructor(
        private router: Router
    ) {
        this.filmNameChanged = new EventEmitter<string>()
    }

    public changeFilmName(filmName:string) {
        this.router.navigate(['/', 'list'], { queryParams: { film_name: filmName }})
        this.filmNameChanged.emit(filmName)
    }
}