import { Component, OnInit } from '@angular/core'
import { FilmService } from '../../film.service'
import { ActivatedRoute } from '@angular/router'
import { Film } from '../model'

@Component({
  selector: 'app-film-favorites',
  templateUrl: './film-favorites.component.html',
  styleUrls: ['./film-favorites.component.css']
})
export class FilmFavoritesComponent implements OnInit {
  films: Array<Film> = []
  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => this.films = data.films || [],
      err => console.log(err)
    )
  }

  filmsNotFound(): boolean {
    return !this.films.length
  }

}
