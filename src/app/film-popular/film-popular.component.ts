import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service'
import { Film } from '../shared/model'

@Component({
  selector: 'app-film-popular',
  templateUrl: './film-popular.component.html',
  styleUrls: ['./film-popular.component.css']
})
export class FilmPopularComponent implements OnInit {
  currentPage:number
  totalPages:number
  films: Array<Film> = []
  loading: boolean
  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.currentPage = 1
    this.getPopularFilms(this.currentPage)
  }

  getPopularFilms(page?: number) {
    this.loading = true
    this.filmService.getPopularFilms(page).subscribe(filmList => {
      this.totalPages = filmList.total_pages
      this.films = this.films.concat(...filmList.results)
      console.log(this.films)
    }, err => {
      console.log(err)
      this.loading = false
    }, () => {
      this.loading = false
    })
  }

  private nextPage() {
    this.currentPage += 1
    this.getPopularFilms(this.currentPage)
  }
}
