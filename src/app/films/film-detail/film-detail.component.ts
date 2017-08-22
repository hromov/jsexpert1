import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FilmService } from '../../film.service'
import { People, Credits } from '../../persons/model'
import { Film } from '../model'
import { Observable } from 'rxjs/Rx'
import { ErrorService, ErrorType } from '../../error.service'

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  film: Film
  cast: Array<People>
  midImgPath: string
  smallImgPath: string
  noImage: string
  isFavorite: boolean
  favoriteChecked: boolean
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.midImgPath = this.filmService.midImgPath
    this.smallImgPath = this.filmService.smallImgPath
    this.noImage = this.filmService.noImage
    /* Есть сомнения, но лучше не придумал. */
    /* Хотелось бы сначала получить film, а затем сделать 2 независимых запроса, не плодить каждый раз новые подписки. Но не получилось */
    this.route.data.flatMap(data => {
      this.film = data.film
      return this.filmService.getCredits(this.film.id.toString())
    }).subscribe(
      (credits: Credits) => this.cast = credits.cast.slice(0, 10),
      err => this.errorService.onError(err, ErrorType.Shown)
    )

    this.filmService.getFavoriteItem(this.film.id.toString())
      .subscribe((favorites: any) => {
        this.isFavorite = favorites.some(favorite => favorite.status)
      },
      err => {
        this.favoriteChecked = true
        this.errorService.onError(err, ErrorType.Shown)
      },
      () => this.favoriteChecked = true)
  }

  saveFavorite() {
    this.favoriteChecked = false
    this.filmService.saveFavoriteItem(this.film.id.toString()).subscribe(
      (favorite: any) => this.isFavorite = favorite && favorite.status === "OK",
      err => console.log(err)
    )
  }

}
