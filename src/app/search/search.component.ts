import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { FilmService } from '../film.service';
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
  @Output()
  filmNameChanged: EventEmitter<string>;

  constructor(
    private filmService: FilmService
  ) {
    this.filmNameChanged = new EventEmitter<string>()
  }

  ngOnInit() {
    Observable.fromEvent(this.searchElement.nativeElement, 'keyup')
      .map((e:any) => e.target.value)
      .debounceTime(250)
      .subscribe(keyup => this.updateFilmNames())
  }

  search() {
    this.filmNameChanged.emit(this.filmName)
  }

  reset() {
    this.filmName = ""
  }

  updateFilmNames() {
    this.filmService.getFilms(this.filmName || "", 1).subscribe((filmList:Array<Film>) => {
      this.filmNames = filmList.map(film => film.Title)
    })
  }
}