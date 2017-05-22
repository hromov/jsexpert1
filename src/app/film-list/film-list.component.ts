import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service'

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  FilmList : Object[] = []
  FilmName : string
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
    this.filmService.getFilms(this.FilmName).subscribe(filmList => {
      this.FilmList = filmList
    })
  }

}
