import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCardComponent } from './film-card/film-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { FilmService} from './film.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';

const appRoutes: Routes = [
  { path: '', component: FilmListComponent },
  { path: 'list', component: FilmListComponent },
  { path: 'popular', component: FilmListComponent }  
];


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FilmService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
