import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FilmListComponent } from './film-list/film-list.component'
import { FilmPopularComponent } from './film-popular/film-popular.component'
import { FilmDetailComponent } from './film-detail/film-detail.component'
import { FilmFavoritesComponent } from './film-favorites/film-favorites.component'
import { FilmAddComponent } from './film-add/film-add.component'
import { FilmAddService } from './film-add/film-add.service'
import { AdminGuardService } from '../users/guard.service'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { FilmPopularResolver } from './film-popular/film-popular.resolver'
import { FilmDetailResolver } from './film-detail/film-detail.resolver'
import { FilmFavoritesResolver } from './film-favorites/film-favorites.resolver'
import { SharedModule } from '../shared/shared.module'

const filmsRoutes: Routes = [
  { 
    path: '',
    component: FilmPopularComponent,
    resolve: {
      filmList: FilmPopularResolver
    }
  },
  { path: 'films', component: FilmListComponent },
  {
    path: 'films/:id',
    component: FilmDetailComponent,
    resolve: {
      film: FilmDetailResolver
    }
  },
  { 
    path: 'films/:id/edit',
    component: FilmDetailComponent,
    canActivate: [AdminGuardService],
    resolve: {
      film: FilmDetailResolver
    }
  },
  {
    path: 'popular',
    component: FilmPopularComponent,
    resolve: {
      filmList: FilmPopularResolver
    }
  },
  { 
    path: 'favorites',
    component: FilmFavoritesComponent,
    resolve: {
      films: FilmFavoritesResolver
    }
  },
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(filmsRoutes)
  ],
  providers: [FilmAddService, FilmPopularResolver, FilmDetailResolver, FilmFavoritesResolver],
  declarations: [
    FilmListComponent,
    FilmPopularComponent,
    FilmDetailComponent,
    FilmFavoritesComponent,
    FilmAddComponent
  ]
})
export class FilmsModule { }
