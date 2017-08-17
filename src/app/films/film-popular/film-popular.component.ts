import { Component, OnInit } from '@angular/core'
import { FilmService } from '../../film.service'
import { Film, FilmList } from '../model'
import { AdminGuardService } from '../../users/guard.service'
import { FilmAddService } from '../film-add/film-add.service'
import { SnackService } from '../../snack.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-film-popular',
  templateUrl: './film-popular.component.html',
  styleUrls: ['./film-popular.component.css']
})
export class FilmPopularComponent implements OnInit {
  currentPage: number = 1
  totalPages: number
  films: Array<Film>
  loading: boolean
  isAdmin: boolean
  constructor(
    private filmService: FilmService,
    //для дз
    private adminGuardService: AdminGuardService,
    private filmAddService: FilmAddService,
    private snackService: SnackService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.totalPages = data.filmList.total_pages
      this.films = data.filmList.results || []
    })
    this.isAdmin = this.adminGuardService.canActivate()
    this.filmAddService.NewFilm$.subscribe((film: Film) => {
      this.films.unshift(film)
      this.snackService.message(`Фильм ${film.title} добавлен!`)
    })
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
