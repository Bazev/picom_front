import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from "./views/login/login.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdvertsComponent} from './views/adverts/adverts.component';
import {HeaderComponent} from './header/header.component';
import {ErrorComponent} from "./views/error/error.component";
import {AuthService} from "./services/Auth/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from "@angular/common";
import {CommonModule} from '@angular/common';
import {SingleAdvertComponent} from './views/single-advert/single-advert.component';
import {MatListModule} from "@angular/material/list";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AdvertFormComponent} from './components/advert-form/advert-form.component';
import {HttpErrorHandler} from "./http-error-handler.service";
import {MessageService} from "./message.service";
import { AddAdvertViewComponent } from './views/add-advert-view/add-advert-view.component';

registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdvertsComponent,
    HeaderComponent,
    ErrorComponent,
    SingleAdvertComponent,
    AdvertFormComponent,
    AddAdvertViewComponent,
  ],

  imports: [
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    NgbModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
  ],
  providers: [AuthService,
    AuthGuard,
    MatDatepickerModule,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    HttpErrorHandler,
  MessageService],

  bootstrap: [AppComponent]
})

export class AppModule {
}
