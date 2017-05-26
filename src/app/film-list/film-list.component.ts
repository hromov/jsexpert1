import { Component, OnInit } from '@angular/core'
import { FilmService } from '../film.service'
import { Film } from '../shared/model'

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  FilmList : Array<Film> = []
  FilmName : string
  loading : boolean
  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.FilmName = "Home"
    this.getFilms()
  }

  private getFilms() {
    if(!this.FilmName) {
      return
    }
    this.loading = true
    this.FilmList.length = 0
    this.filmService.getFilms(this.FilmName).subscribe(filmList => {
      this.FilmList = filmList      
    }, err => {
      this.loading = false
      console.error(err)
    }, () => {
      this.loading = false
    })
  }

}
