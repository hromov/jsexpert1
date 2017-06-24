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
  //templates : Array<Template>
  //selectedTemplate: number
  currentPage: number
  totalPages: number
  currentFilm: string
  constructor(
    private filmService: FilmService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {
    this.filmList = []
    /*
    this.templates = [
      {
        Name: "Карточки", Value: 0, Icon: "apps"
      },
      {
        Name: "Список", Value: 1, Icon: "menu"
      }
    ]
    */
    //this.selectedTemplate = this.templates[0].Value
    this.searchService.filmNameChanged.subscribe((filmName:string) => {
      //console.log(filmName)
      this.getNewFilms(filmName)
    })
    this.route.queryParams.subscribe(params => {
      this.currentFilm = params['film_name']
      //console.log(this.currentFilm)
    })
  }

  ngOnInit() {
    this.getNewFilms(this.currentFilm)
    //this.getPopularFilms()
  }
  /*
  getPopularFilms(page?: number) {
    this.filmService.getPopularFilms(page).subscribe(filmList => {
      console.log(filmList)
    })
  }
  */

  //вызываем из шаблона при смене названия и в OnInit()
  
  getNewFilms(filmName: string) {
    this.currentFilm = filmName
    this.currentPage = 1
    this.filmList.length = 0
    this.getFilms(filmName)
  }

  private getFilms(filmName: string) {
    this.loading = true
    this.filmService.getFilms(filmName || "", this.currentPage)
      .subscribe(filmList => {
        console.log(filmList)
        this.totalPages = filmList.total_pages
        this.filmList = this.filmList.concat(...filmList.results)
        console.log(this.filmList)
      }, err => {
        this.loading = false
        console.error(err)
      }, () => {
        this.loading = false
      })
  }

  private nextPage() {
    this.currentPage += 1
    this.getFilms(this.currentFilm)
  }
}
