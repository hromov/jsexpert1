import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CastComponent } from './cast/cast.component'
import { PeopleDetailComponent } from './people-detail/people-detail.component'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule, Routes } from '@angular/router'

const personsRoutes: Routes = [
  { path: 'films/:id/cast', component: CastComponent},
  { path: 'peoples/:id', component: PeopleDetailComponent},
]

@NgModule({
  imports: [
    CommonModule,
    CastComponent,
    PeopleDetailComponent,
  ],
  declarations: []
})
export class PersonsModule { }
