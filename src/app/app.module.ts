import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { GuardService } from './guard.service'
import { SSOService } from './sso.service'
import { SSOApiService } from './sso-api.service'
import { ErrorToken, ErrorMessages } from './shared/errorToken'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'payment', component: PaymentComponent, canActivate: [GuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    GuardService,
    SSOService,
    SSOApiService,
    {provide: ErrorToken, useValue: ErrorMessages},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
