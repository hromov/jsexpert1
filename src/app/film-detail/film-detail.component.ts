import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service'
import { Film, People } from '../shared/model'

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
  //т.к. нет метода updateFavorite - убеждаемся в том что фильма нет в списке Избранных для избежания дублей
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
    if(!this.filmID) {
      return
    }
    this.midImgPath = this.filmService.midImgPath
    this.smallImgPath = this.filmService.smallImgPath
    this.noImage = this.filmService.noImage
    this.filmService.getFilmById(this.filmID).subscribe((film:Film) => {
      console.log(film)
      this.film = film
    }, err => {
      this.loading = false
      console.error(err)
    }, () => {
      this.loading = false
    })
    this.filmService.getCredits(this.filmID).subscribe(credits => {
      console.log(credits)
      this.cast = credits.cast.slice(0,10)
    })
    this.filmService.getFavoriteItem(this.filmID).subscribe(favorites => {
      console.log(favorites)
      favorites.forEach(favorite => {
        //Если пришел список фильмов и хотябы один из них содержит status = true
        if(favorite.status) {
          this.isFavorite = true
          return
        }
      })      
    }, err => {
      this.favoriteChecked = true
    }, () => {
      this.favoriteChecked = true
    })
  }

  saveFavorite() {
    /*
    this.filmService.updateFavoriteItem(this.film).subscribe(updated => {
      console.log(updated)
      console.log("updated")
    })
    */
    this.favoriteChecked = false
    this.filmService.saveFavoriteItem(this.filmID).subscribe(favorite => {
      this.isFavorite = favorite && favorite.status === "OK"
      /*
      if(favorite && favorite.status === "OK") {
        this.isFavorite = true
      }
      */
      console.log("saved")
      console.log(favorite)
    }, err => {
      console.log(err)
      this.favoriteChecked = true
    }, () => {
      this.favoriteChecked = true
    })    
  }

}
