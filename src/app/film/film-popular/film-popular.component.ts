import { Component, OnInit } from '@angular/core'
import { FilmService } from '../../film.service'
import { Film } from '../../shared/model'
import { AdminGuardService } from '../../users/guard.service'

@Component({
  selector: 'app-film-popular',
  templateUrl: './film-popular.component.html',
  styleUrls: ['./film-popular.component.css']
})
export class FilmPopularComponent implements OnInit {
  currentPage: number
  totalPages: number
  films: Array<Film> = []
  loading: boolean
  canEdit: boolean
  constructor(
    private filmService: FilmService,
    private adminGuardService: AdminGuardService
  ) {}

  ngOnInit() {
    this.currentPage = 1
    this.getPopularFilms(this.currentPage)
    this.canEdit = this.adminGuardService.canActivate()
  }

  getPopularFilms(page?: number) {
    this.loading = true
    this.filmService.getPopularFilms(page).subscribe(
      (filmList: any) => {
        this.totalPages = filmList.total_pages
        this.films = this.films.concat(...filmList.results)
      },
      err => this.loading = false,
      () => this.loading = false
    )
  }

  private nextPage() {
    this.currentPage += 1
    this.getPopularFilms(this.currentPage)
  }
}
