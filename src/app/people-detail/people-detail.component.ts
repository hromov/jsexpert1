import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service'
import { Film, People } from '../shared/model'

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  personID: string
  person: People
  midImgPath: string
  smallImgPath: string
  noImage: string
  cast: Array<Object>
  crew: Array<Object>
  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
  ) {
    this.route.params.subscribe(params => {
      this.personID = params['id']
      console.log(this.personID)
    })
  }

  ngOnInit() {
    if(!this.personID) {
      return
    }
    this.midImgPath = this.filmService.midImgPath
    this.smallImgPath = this.filmService.smallImgPath
    this.noImage = this.filmService.noImage
    this.filmService.getPerson(this.personID).subscribe((person:People) => {
      console.log(person)
      this.person = person
    }, err => {
      console.error(err)
    })
    this.filmService.getPersonMovies(this.personID).subscribe(filmList => {
      console.log(filmList)
      this.cast = filmList.cast
      this.crew = filmList.crew
    })
    /*
    this.filmService.getCredits(this.filmID).subscribe(credits => {
      console.log(credits)
      this.cast = credits.cast.slice(0,10)
    })
    */
  }
}
