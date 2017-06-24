import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service'
import { Film, People } from '../shared/model'

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  filmID: string
  film: Film
  cast: Array<People>
  crew: Array<People>
  smallImgPath: string
  noImage: string
  bigBackPath: string
  loading: boolean = true
  creditsLoading: boolean = true
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
    this.bigBackPath = this.filmService.bigBackPath
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
      this.cast = credits.cast
      this.crew = credits.crew
    }, err => {
      this.creditsLoading = false
      console.error(err)
    }, () => {
      this.creditsLoading = false
    })
  }
}
