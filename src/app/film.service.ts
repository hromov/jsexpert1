import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class FilmService {
  searchUrl: string = "http://www.omdbapi.com/?page=1&s=";
  filmUrl: string = "http://www.omdbapi.com/?i=";
  apiKey: string = '&apikey=2a3fe283'
  constructor(
    private http: Http
  ) { }

  getFilms (filmName: string) {
    return this.http.get(this.searchUrl + filmName + this.apiKey)
      .map((r: Response) => r.json().Search || [])
      .catch((err:Error) => { return Observable.throw(err) })
  }

  getFilmById (filmId: string) {
    return this.http.get(this.filmUrl + filmId + this.apiKey)
      .map((r: Response) => r.json() || null)
      .catch((err:Error) => { return Observable.throw(err) })
  }
}
