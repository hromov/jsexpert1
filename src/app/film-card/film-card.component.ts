import { Component, OnInit } from '@angular/core';
import {FilmCardService} from './film-card.service'

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  filmList : Object[] = []
  filmName : string
  loading : boolean
  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
    this.loading = true
    this.filmName = "Home"
    this.getFilms();
  }

  public getFilms(){
    if(!this.filmName) {return;}
    this.loading = true
    this.filmList.length = 0
    this.filmCardService.getFilms(this.filmName).subscribe(data => {
      this.filmList = data;
      this.loading = false
    }, err => {
      this.loading = false
      console.error("Правильно ли тут ловить ошибки?")
      console.error(err)
    })
  }

}
