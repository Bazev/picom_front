import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, first, map, Observable, Subject} from "rxjs";
import {Advert} from "../../models/advert.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../Auth/auth.service";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";
import {AdvertPicture} from "../../models/advertPicture.model";


@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  adverts: BehaviorSubject<Array<AdvertPicture>>
  // adverts = new Subject<any[]>();
  currentUser: User;

  constructor(private http: HttpClient, private authService: AuthService, private router:Router) {
    this.currentUser = this.authService.currentUserValue;
    this.adverts = new BehaviorSubject<Array<AdvertPicture>>([]);
    this.getAdverts()
  }

  getAdverts() {
   const id = this.authService.currentUserValue.id
    console.log(this.currentUser)
    this.http
      .get('https://picom.herokuapp.com/ws/customer/'+id+'/adverts')
      .pipe(
        map((data: any) => data.map((data: any) => Advert.fromJson(data))))
      .toPromise()
      .then((adverts: Array<Advert>) => {
        this.adverts.next(adverts);
      })
  }

  getAdvertById(id : number) : Promise<Advert> {
   return this.http
      .get('https://picom.herokuapp.com/ws/advert/'+id)
      .pipe(
        map((data:any) => Advert.fromJson(data)))
      .toPromise()
     .then();
  }

 save(advertPicture:AdvertPicture):Promise<any> {
    let headers = new HttpHeaders();
    headers = headers.append(`Access-Control-Allow-Origin': '*'`, this.authService.token.getValue());

    const adverts = this.adverts.getValue();
    adverts.push(advertPicture)
   this.adverts.next(adverts)
   return this.http
     .post('https://picom.herokuapp.com/ws/advertPicture/', advertPicture.toJson(), {headers})
     .toPromise()
 }

}
