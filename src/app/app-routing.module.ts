import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {AdvertsComponent} from "./views/adverts/adverts.component";
import {ErrorComponent} from "./views/error/error.component";
import {SingleAdvertComponent} from "./views/single-advert/single-advert.component";
import {EditAdvertViewComponent} from "./views/edit-advert-view/edit-advert-view.component";
import {AddAdvertViewComponent} from "./views/add-advert-view/add-advert-view.component";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', canActivate: [AuthGuard], component:AdvertsComponent},
  {path:'adverts', canActivate: [AuthGuard], component:AdvertsComponent},
  {path:'oneadvert/:id', canActivate: [AuthGuard], component:SingleAdvertComponent},
  {path:'advert/:id/edit', canActivate: [AuthGuard], component:EditAdvertViewComponent},
  {path:'advert/add', canActivate:[AuthGuard], component:AddAdvertViewComponent},
  {path:'auth', component:LoginComponent},
  {path: 'not-found', component: ErrorComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
