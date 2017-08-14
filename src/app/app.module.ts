import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FilmListComponent } from './film/film-list/film-list.component';
import { FilmCardComponent } from './film/film-card/film-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { FilmService} from './film.service';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { FilmPopularComponent } from './film/film-popular/film-popular.component';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { FilmFavoritesComponent } from './film/film-favorites/film-favorites.component';
import { CastComponent } from './persons/cast/cast.component';
import { PeopleDetailComponent } from './persons/people-detail/people-detail.component';
import { PersonCardComponent } from './persons/person-card/person-card.component';

const appRoutes: Routes = [
  { path: '', component: FilmPopularComponent },
  { path: 'films', component: FilmListComponent },
  { path: 'films/:id', component: FilmDetailComponent},
  { path: 'films/:id/cast', component: CastComponent},
  { path: 'peoples/:id', component: PeopleDetailComponent},
  { path: 'popular', component: FilmPopularComponent },
  { path: 'favorites', component: FilmFavoritesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmCardComponent,
    SearchComponent,
    FilmPopularComponent,
    FilmDetailComponent,
    CastComponent,
    PeopleDetailComponent,
    PersonCardComponent,
    FilmFavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FilmService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
