import { Component, OnInit, Input } from '@angular/core'
import { FilmService } from '../film.service'
import { Film } from '../shared/model'


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
  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    if(this.filmId) {
      this.midImgPath = this.filmService.midImgPath
      this.noImage = this.filmService.noImage
      this.filmService.getFilmById(this.filmId).subscribe(film => {
        this.Film = film
      }, err => {
        console.error(err)
      })
      this.filmService.getFavoriteItem(this.filmId).subscribe((favorites:any) => {
        this.isFavorite = favorites.some(favorite => favorite.status)
      })
    }    
  }
}
