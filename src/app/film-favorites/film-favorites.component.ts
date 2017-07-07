import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-favorites',
  templateUrl: './film-favorites.component.html',
  styleUrls: ['./film-favorites.component.css']
})
export class FilmFavoritesComponent implements OnInit {
  loading: boolean = true
  films: Array<Object> = []
  constructor( private filmService: FilmService ) {
    this.filmService.getFavoritesItem().subscribe(films => {
      console.log(films);
      this.films = films
    }, err => {
      this.loading = false
    }, () => {
      this.loading = false
    })
  }

  ngOnInit() {
  }

  filmsNotFound() : boolean{
    return !this.loading && !this.films.length
  }

}
