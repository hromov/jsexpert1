import { Component, OnInit } from '@angular/core'
import { FilmService } from '../film.service'
import { Film } from '../shared/model'

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList : Array<Film> = []
  loading : boolean
  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.getFilms("Home")
  }

  private getFilms(filmName: string) {
    this.loading = true
    this.filmList.length = 0
    this.filmService.getFilms(filmName || "").subscribe(filmList => {
      this.filmList = filmList      
    }, err => {
      this.loading = false
      console.error(err)
    }, () => {
      this.loading = false
    })
  }

}
