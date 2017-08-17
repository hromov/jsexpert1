import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FilmService } from '../../film.service'
import { People } from '../../persons/model'
import { Film } from '../../films/model'
import { Observable } from 'rxjs/Rx';

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
  bigBackPath: string
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {
    this.route.params.subscribe(params => {
      this.filmID = params['id']
    })
  }

  ngOnInit() {
    this.bigBackPath = this.filmService.bigBackPath
    this.route.data.flatMap(data => {
      this.cast = data.credits.cast
      this.crew = data.credits.crew
      return this.filmService.getFilmById(this.filmID)
    })
    .subscribe(film => this.film = film)    
  }
}
