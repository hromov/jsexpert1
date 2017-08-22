import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CastComponent } from './cast/cast.component'
import { PeopleDetailComponent } from './people-detail/people-detail.component'
import { MaterialModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { PeopleDetailResolver } from './people-detail/people-detail.resolver'
import { CastResolver } from './cast/cast.resolver'

const personsRoutes: Routes = [
  { 
    path: '',
    component: CastComponent,
    resolve: {
      credits: CastResolver
    }
  },
  {
    path: ':id',
    component: PeopleDetailComponent,
    resolve: {
      person: PeopleDetailResolver
    }
  },
]

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(personsRoutes)
  ],
  declarations: [
    CastComponent,
    PeopleDetailComponent
  ],
  providers: [
    PeopleDetailResolver,
    CastResolver
  ]
  
})
export class PersonsModule { }
