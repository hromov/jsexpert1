import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { SearchFilter } from './shared/model'

@Injectable()
export class FilmService {
  searchUrl: string = "http://www.omdbapi.com";
  filmUrl: string = "http://www.omdbapi.com";
  apiKey: string = '2a3fe283'
  constructor(
    private http: Http
  ) { }

  getSearchParams(filter: SearchFilter) {
    //Не знаю почему сonst, так было в примере. Options тоже
    const searchParams = new URLSearchParams()
    searchParams.set('apikey', filter.ApiKey || this.apiKey)
    filter.Name && searchParams.set('s', filter.Name)
    filter.ID && searchParams.set('i', filter.ID)
    filter.Page && searchParams.set('page', String(filter.Page))
    return searchParams
  }

  getFilms (filmName: string, page?: number) {
    let filter: SearchFilter = {
      Name: filmName,
      Page: page
    }
    const options = new RequestOptions({ search: this.getSearchParams(filter) });
    return this.http.get(this.searchUrl, options)
      .map((r: Response) => r.json().Search || [])
      .catch((err:Error) => { return Observable.throw(err) })
  }

  getFilmById (filmId: string) {
    let filter: SearchFilter = {
      ID: filmId,
    }
    const options = new RequestOptions({ search: this.getSearchParams(filter) });
    return this.http.get(this.filmUrl, options)
      .map((r: Response) => r.json() || null)
      .catch((err:Error) => { return Observable.throw(err) })
  }
}
