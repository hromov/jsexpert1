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

const filmsRoutes: Routes = [
  { path: '', component: FilmPopularComponent },
  { path: 'films', component: FilmListComponent },
  { path: 'films/:id', component: FilmDetailComponent},
  { 
    path: 'films/:id/edit',
    component: FilmDetailComponent,
    canActivate: [AdminGuardService]
  },
  { path: 'popular', component: FilmPopularComponent },
  { path: 'favorites', component: FilmFavoritesComponent },
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FilmsModule,
    ReactiveFormsModule,
    RouterModule.forChild(filmsRoutes)
  ],
  providers: [FilmAddService],
  declarations: []
})
export class FilmsModule { }
