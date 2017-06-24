import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import { FilmService } from '../film.service'
import { SearchService } from './search.service'
import { Film } from '../shared/model'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filmName: string
  filmNames: Array<string>
  @ViewChild('searchInput')
  searchElement;
  constructor(
    private filmService: FilmService,
    private searchService: SearchService
  ) {
    
  }

  ngOnInit() {
    Observable.fromEvent(this.searchElement.nativeElement, 'keyup')
      .map((e:any) => e.target.value)
      .debounceTime(250)
      .subscribe(keyup => this.updateFilmNames())
  }

  search() {
    console.log(this.filmName)
    this.searchService.changeFilmName(this.filmName)
  }

  reset() {
    this.filmName = ""
  }

  updateFilmNames() {
    console.log(this.filmName)
    this.filmService.getFilms(this.filmName || "", 1)
    .map((r: any) => r.results || [])
    .subscribe((filmList:Array<Film>) => {
      this.filmNames = filmList.map(film => film.title)
    })
  }
}
