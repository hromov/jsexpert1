import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { PersonCardComponent } from './person-card/person-card.component'
import { FilmCardComponent } from './film-card/film-card.component'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    PersonCardComponent,
    FilmCardComponent
  ],
  exports: [
    PersonCardComponent,
    FilmCardComponent
  ]
})
export class SharedModule { }
