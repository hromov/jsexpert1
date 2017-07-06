import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service'
import { Film, People } from '../shared/model'
import { Observable } from 'rxjs/Observable';

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
    if(this.filmID) {
      this.bigBackPath = this.filmService.bigBackPath
    
      Observable.forkJoin([
        this.filmService.getFilmById(this.filmID),
        this.filmService.getCredits(this.filmID)
      ]).subscribe(([film, credits] ) => {
        this.film = film
        this.cast = credits.cast
        this.crew = credits.crew
      }, err => {
        console.error(err)
        this.loading = false
      }, () => {
        this.loading = false
      }) 
    } else {
      return
    }
    
  }
}
