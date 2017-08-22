import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../persons/model'
import { FilmService } from '../../film.service'

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  @Input()
  person: People
  smallImgPath: string
  noImage: string
  bigBackPath: string
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.smallImgPath = this.filmService.smallImgPath
    this.noImage = this.filmService.noImage
  }

}
