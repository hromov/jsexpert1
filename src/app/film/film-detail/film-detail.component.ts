import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../film.service'
import { Film, People } from '../../shared/model'

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  filmID: string
  film: Film
  cast: Array<People>
  midImgPath: string
  smallImgPath: string
  noImage: string
  isFavorite: boolean
  favoriteChecked: boolean
  loading: boolean = true
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {
    this.route.params.subscribe(params => {
      this.filmID = params['id']
      console.log(this.filmID)
    })
  }

  ngOnInit() {
    if (!this.filmID) {
      return
    }
    this.midImgPath = this.filmService.midImgPath
    this.smallImgPath = this.filmService.smallImgPath
    this.noImage = this.filmService.noImage
    this.filmService.getFilmById(this.filmID).subscribe(
      (film: Film) => this.film = film,
      err => this.loading = false,
      () => this.loading = false
    )
    this.filmService.getCredits(this.filmID).subscribe(
      (credits: any) => this.cast = credits.cast.slice(0, 10)
    )
    this.filmService.getFavoriteItem(this.filmID).subscribe(
      (favorites: any) => this.isFavorite = favorites.some(favorite => favorite.status),
      err => this.favoriteChecked = true,
      () => this.favoriteChecked = true
    )
  }

  saveFavorite() {
    this.favoriteChecked = false
    this.filmService.saveFavoriteItem(this.filmID).subscribe(
      (favorite: any) => this.isFavorite = favorite && favorite.status === "OK",
      err => console.log(err)
    )
  }

}
