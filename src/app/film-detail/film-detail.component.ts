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
      console.error(err)
    })
    this.filmService.getCredits(this.filmID).subscribe(credits => {
      console.log(credits)
      this.cast = credits.cast.slice(0,10)
    })
  }

}
