import { Component, OnInit, Input } from '@angular/core'
import {FilmService} from '../film.service'


@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input() filmId: string
  Film: Object = {}
  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    if(!this.filmId) {
      return
    }
    this.filmService.getFilmById(this.filmId).subscribe(film => {
      console.log(film)
      this.Film = film;
    })
  }

}
