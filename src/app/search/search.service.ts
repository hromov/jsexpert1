import { Injectable, EventEmitter } from '@angular/core';
/*
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { SearchFilter } from './shared/model'
*/
@Injectable()
export class SearchService {
    filmNameChanged: EventEmitter<string>;
    
    constructor() {
        this.filmNameChanged = new EventEmitter<string>()
    }

    public changeFilmName(filmName:string) {
        this.filmNameChanged.emit(filmName)
    }
}