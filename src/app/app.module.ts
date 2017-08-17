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
import { FilmPopularResolver } from './films/film-popular/film-popular.resolver';
import { LoadingComponent } from './loading/loading.component'

const appRoutes: Routes = [
  { path: '', loadChildren: './films/films.module#FilmsModule'},
  { path: 'films/:id/cast', loadChildren: './persons/persons.module#PersonsModule'},
  { path: 'peoples', loadChildren: './persons/persons.module#PersonsModule'},
  { path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LoginComponent,
    LoadingComponent
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
