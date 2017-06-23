import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { SearchFilter } from './shared/model'

@Injectable()
export class FilmService {
  //searchUrl: string = "http://www.omdbapi.com";
  filmUrl: string = "http://www.omdbapi.com"
  
  apiUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = '0994e7679a856150aadcecf7de489bce'
  movieUrl: string = `${this.apiUrl}/movie`
  searchUrl: string = `${this.apiUrl}/search`
  
  popularMovieUrl: string = `${this.movieUrl}/popular`
  searchMovieUrl: string = `${this.searchUrl}/movie`
  
  defaultLanguage: string = 'ru-RU'
  
  constructor(
    private http: Http
  ) { }

  getSearchParams(filter: SearchFilter) {
    const searchParams = new URLSearchParams()
    searchParams.set('api_key', filter.ApiKey || this.apiKey)
    searchParams.set('query', filter.Query)
    searchParams.set('language', filter.Language || this.defaultLanguage)
    searchParams.set('page', String(filter.Page || 1))
    return searchParams
  }

  getFilms (filmName: string, page?: number) {
    let filter: SearchFilter = {
      Query: filmName,
      Page: page || 1
    }
    const options = new RequestOptions({ search: this.getSearchParams(filter) });
    console.log(this.searchMovieUrl)
    return this.http.get(this.searchMovieUrl, options)
      .map((r: Response) => r.json() || [])
      .catch((err:Error) => { return Observable.throw(err) })
  }

  getFilmById (filmId: string) {
    let filter: SearchFilter = {
      ID: filmId
    }
    const options = new RequestOptions({ search: this.getSearchParams(filter) });
    return this.http.get(`${this.movieUrl}/${filmId}`, options)
      .map((r: Response) => r.json() || null)
      .catch((err:Error) => { return Observable.throw(err) })
  }

  getPopularFilms (page?: number) {
    let filter: SearchFilter = {
      Page: page || 1
    }
    const options = new RequestOptions({search: this.getSearchParams(filter)})
    return this.http.get(this.popularMovieUrl, options)
      .map((r: Response) => r.json() || null)
      .catch((err: Error) => { return Observable.throw(err)})
  }
}
