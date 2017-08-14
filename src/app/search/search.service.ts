import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
@Injectable()
export class SearchService {
    filmNameChanged: EventEmitter<string>;
    
    constructor(
        private router: Router
    ) {
        this.filmNameChanged = new EventEmitter<string>()
    }

    public changeFilmName(filmName:string) {
        this.router.navigate(['/films'], { queryParams: { film_name: filmName }})
        this.filmNameChanged.emit(filmName)
    }
}