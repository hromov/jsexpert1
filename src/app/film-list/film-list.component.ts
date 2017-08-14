import { Component, OnInit } from '@angular/core'
import { FilmService } from '../film.service'
import { Film } from '../shared/model'
import { SearchService } from '../search/search.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList : Array<Film>
  loading : boolean
  currentPage: number
  totalPages: number
  currentFilm: string
  constructor(
    private filmService: FilmService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {
    this.filmList = []
    this.searchService.filmNameChanged.subscribe((filmName:string) => {
      this.getNewFilms(filmName)
    })
    this.route.queryParams.subscribe(params => {
      this.currentFilm = params['film_name']
    })
  }

  ngOnInit() {
    this.getNewFilms(this.currentFilm)
  }
  
  getNewFilms(filmName: string) {
    this.currentFilm = filmName
    this.currentPage = 1
    this.filmList.length = 0
    this.getFilms(filmName)
  }

  private getFilms(filmName: string) {
    this.loading = true
    this.filmService.getFilms(filmName || "", this.currentPage)
      .subscribe((filmList:any) => {
        this.totalPages = filmList.total_pages
        this.filmList = this.filmList.concat(...filmList.results)
      }, err => this.loading = false,
      () => this.loading = false)
  }

  private nextPage() {
    this.currentPage += 1
    this.getFilms(this.currentFilm)
  }

  filmsNotFound() : boolean{
    return !this.loading && !this.filmList.length
  }
}
