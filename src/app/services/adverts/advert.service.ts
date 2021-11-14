import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {Advert} from "../../models/advert.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../Auth/auth.service";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  adverts: BehaviorSubject<Array<Advert>>
  currentUser: User;


  constructor(private http: HttpClient, private authService: AuthService) {
    this.currentUser = this.authService.currentUserValue;
    this.adverts = new BehaviorSubject<Array<Advert>>([]);
    this.getAdverts()
  }

  getAdverts() {
   // const id = this.authService.currentUserValue.id
    console.log(this.currentUser)
    this.http
      .get('http://localhost:8080/ws/customer/1/adverts')
      .pipe(
        map((data: any) => data.adverts.map((advertAsJson: any) => Advert.fromJson(advertAsJson))))
      .toPromise()
      .then((adverts: Array<Advert>) => {
        this.adverts.next(adverts);
      })
  }

  // getAdvertsByCustomer(identifiant : string) : Promise<Array<Advert>> {
  //   const identifiant = this.currentUser.id
  //   return this.http
  //     .get('http://localhost:8080/ws/customer/' + identifiant + '/adverts')
  //     .pipe(
  //       map((data: any) => data.adverts.map((advertAsJson: any) => Advert.fromJson(advertAsJson))))
  //     .toPromise();
  // }

}
