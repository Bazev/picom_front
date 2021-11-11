import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {AdvertsComponent} from "./views/adverts/adverts.component";
import {ErrorComponent} from "./views/error/error.component";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  {path:'', canActivate:[AuthGuard], component:AdvertsComponent},
  {path:'home', canActivate: [AuthGuard], component:AdvertsComponent},
  {path:'adverts', canActivate: [AuthGuard], component:AdvertsComponent},
  {path:'auth', component:LoginComponent},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
