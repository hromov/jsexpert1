import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../../film.service'
import { People, Credits } from '../../persons/model'
import { Film, FilmList } from '../../films/model'

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  person: People
  midImgPath: string
  smallImgPath: string
  noImage: string
  cast: Array<Object>
  crew: Array<Object>
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.midImgPath = this.filmService.midImgPath
    this.smallImgPath = this.filmService.smallImgPath
    this.noImage = this.filmService.noImage
    this.route.data.flatMap(data => {
      this.person = data.person
      return this.filmService.getPersonMovies(this.person.id.toString())
    }).subscribe((credits:Credits) => {
      this.cast = credits.cast
      this.crew = credits.crew
    })
  }
}
