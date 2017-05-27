import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filmName: string
  @Output()
    filmNameChanged: EventEmitter<string>
  constructor() {
    this.filmNameChanged = new EventEmitter()
  }

  ngOnInit() {
  }

  search() {
    this.filmNameChanged.emit(this.filmName)
  }

  reset() {
    this.filmName = ""
  }

}
