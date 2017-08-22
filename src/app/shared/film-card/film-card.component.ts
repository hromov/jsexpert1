import { Component, OnInit, Input } from '@angular/core'
import { FilmService } from '../../film.service'
import { Film } from '../../films/model'
import { ErrorService, ErrorType } from '../../error.service'


@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() filmId: string;
  Film: Film
  midImgPath: string
  noImage: string
  isFavorite: boolean

  //для дз
  @Input() canEdit: boolean
  @Input() film: Film
  
  constructor(
    private filmService: FilmService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.midImgPath = this.filmService.midImgPath
    this.noImage = this.filmService.noImage
    if(this.filmId) {
      this.filmService.getFilmById(this.filmId).subscribe(
        film => this.Film = film,
        err => this.errorService.onError(err, ErrorType.Shown)
      )
      this.filmService.getFavoriteItem(this.filmId).subscribe(
        (favorites:any) => this.isFavorite = favorites.some(favorite => favorite.status),
        err => this.errorService.onError(err, ErrorType.Shown)
      )
    } else {
      //Временно, для дз
      this.Film = this.film
    }  
  }
}
