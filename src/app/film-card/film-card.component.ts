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
  @Input() selectedTemplate: number;
  Film: Film
  imgPath: string = 'https://image.tmdb.org/t/p'
  midImgPath: string = `${this.imgPath}/w500/`
  noImage: string = "data:image/png;base64,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"

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {
    if(!this.filmId) {
      return
    }
    this.filmService.getFilmById(this.filmId).subscribe(film => {
      this.Film = film
    }, err => {
      console.error(err)
    })
  }
}
