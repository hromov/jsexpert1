import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import 'hammerjs'
import { FilmService} from './film.service'
import { SearchComponent } from './search/search.component'
import { SearchService } from './search/search.service'
import { LoginComponent } from './login/login.component'
import { AdminGuardService } from './users/guard.service'
import { SSOService } from './users/sso.service'
import { SSOApiService } from './users/sso-api.service'
import { ErrorToken, ErrorMessages } from './shared/errorToken'
import { SnackService } from './snack.service'
import { FilmCardComponent } from './shared/film-card/film-card.component'
import { PersonCardComponent } from './shared/person-card/person-card.component'

const appRoutes: Routes = [
  { path: '', loadChildren: './films/films.module#FilmsModule'},
  { path: 'films', loadChildren: './films/films.module#FilmsModule'},
  { path: 'popular', loadChildren: './films/films.module#FilmsModule'},
  { path: 'favorites', loadChildren: './films/films.module#FilmsModule'},
  { path: 'films/:id/cast', loadChildren: './persons/persons.module#PersonsModule'},
  { path: 'peoples/:id', loadChildren: './persons/persons.module#PersonsModule'},
  { path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PersonCardComponent,
    LoginComponent,
    FilmCardComponent
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
    SnackService,
    {provide: ErrorToken, useValue: ErrorMessages}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
