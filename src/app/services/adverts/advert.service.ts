import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {Advert} from "../../models/advert.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../Auth/auth.service";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  adverts : BehaviorSubject<Array<Advert>>
  currentUser : User;

  constructor(private http : HttpClient, private authService : AuthService) {
    this.currentUser = this.authService.currentUserValue;
    this.adverts = new BehaviorSubject<Array<Advert>>([]);
    this.getAdverts()
  }

  getAdverts() : void {
    const id = this.currentUser.id
    this.http
     .get('http://localhost:8080/ws/customer/'+id+'/adverts')
      .pipe(
        map((data:any) => data.adverts.map((advertAsJson:any) => Advert.fromJson(advertAsJson))))
      .toPromise()
      .then((adverts:Array<Advert>) => {
        this.adverts.next(adverts)
      })
  }

}
