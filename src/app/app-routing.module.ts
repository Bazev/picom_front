import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {AdvertsComponent} from "./views/adverts/adverts.component";
import {ErrorComponent} from "./views/error/error.component";
import {SingleAdvertComponent} from "./views/single-advert/single-advert.component";
import {AddAdvertComponent} from "./views/add-advert/add-advert.component";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', canActivate: [AuthGuard], component:AdvertsComponent},
  {path:'adverts', canActivate: [AuthGuard], component:AdvertsComponent},
  {path:'adverts/:id', component:SingleAdvertComponent},
  {path: 'advert/add', canActivate:[AuthGuard], component:AddAdvertComponent},
  {path:'auth', component:LoginComponent},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
