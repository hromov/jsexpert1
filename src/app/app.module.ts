import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { FilmListComponent } from './film/film-list/film-list.component'
import { FilmCardComponent } from './film/film-card/film-card.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import 'hammerjs'
import { FilmService} from './film.service'
import { SearchComponent } from './search/search.component'
import { SearchService } from './search/search.service'
import { FilmPopularComponent } from './film/film-popular/film-popular.component'
import { FilmDetailComponent } from './film/film-detail/film-detail.component'
import { FilmFavoritesComponent } from './film/film-favorites/film-favorites.component'
import { CastComponent } from './persons/cast/cast.component'
import { PeopleDetailComponent } from './persons/people-detail/people-detail.component'
import { PersonCardComponent } from './persons/person-card/person-card.component'
import { LoginComponent } from './login/login.component'
import { AdminGuardService } from './users/guard.service'
import { SSOService } from './users/sso.service'
import { SSOApiService } from './users/sso-api.service'
import { ErrorToken, ErrorMessages } from './shared/errorToken'
import { FilmAddComponent } from './film/film-add/film-add.component'
import { FilmAddService } from './film/film-add/film-add.service'
import { SnackService } from './snack.service'

const appRoutes: Routes = [
  { path: '', component: FilmPopularComponent },
  { path: 'films', component: FilmListComponent },
  { path: 'films/:id', component: FilmDetailComponent},
  { 
    path: 'films/:id/edit',
    component: FilmDetailComponent,
    canActivate: [AdminGuardService]
  },
  { path: 'films/:id/cast', component: CastComponent},
  { path: 'peoples/:id', component: PeopleDetailComponent},
  { path: 'popular', component: FilmPopularComponent },
  { path: 'favorites', component: FilmFavoritesComponent },
  { path: 'login', component: LoginComponent}
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
    FilmFavoritesComponent,
    LoginComponent,
    FilmAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    FilmService,
    SearchService,
    AdminGuardService,
    SSOService,
    SSOApiService,
    FilmAddService,
    SnackService,
    {provide: ErrorToken, useValue: ErrorMessages}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
