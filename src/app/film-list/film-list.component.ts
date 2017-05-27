import { Component, OnInit } from '@angular/core'
import { FilmService } from '../film.service'
import { Film, Template } from '../shared/model'

@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  filmList : Array<Film>
  loading : boolean
  templates : Array<Template>
  selectedTemplate: number
  constructor(
    private filmService: FilmService
  ) {
    this.filmList = []
    this.templates = [
      {
        Name: "Эскиз", Value: 0, Icon: "apps"
      },
      {
        Name: "Список", Value: 1, Icon: "menu"
      }
    ]
    this.selectedTemplate = this.templates[0].Value
  }

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
