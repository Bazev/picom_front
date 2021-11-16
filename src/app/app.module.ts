import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from "./views/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AdvertsComponent } from './views/adverts/adverts.component';
import { HeaderComponent } from './header/header.component';
import {ErrorComponent} from "./views/error/error.component";
import {AuthService} from "./services/Auth/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
import { AdvertsTableLineComponent } from './adverts-table-line/adverts-table-line.component';
import { AdvertTableComponent } from './advert-table/advert-table.component';
import {CommonModule} from '@angular/common';
import { SingleAdvertComponent } from './views/single-advert/single-advert.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdvertsComponent,
    HeaderComponent,
    ErrorComponent,
    AdvertsTableLineComponent,
    AdvertTableComponent,
    SingleAdvertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [AuthService, AuthGuard,
    { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})

export class AppModule { }
