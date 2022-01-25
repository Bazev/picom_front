import {Injectable} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Advert} from "../../models/advert.model";
import {AuthService} from "../Auth/auth.service";
import {User} from "../../models/user.model";
import {HandleError, HttpErrorHandler} from "../../http-error-handler.service";

const BASEURL = 'https://picom.herokuapp.com/ws/';


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root',
})
export class AdvertService {
  currentUser: User;
  handleError: HandleError;


  constructor(private http: HttpClient, private authService: AuthService, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('advertService')
    this.currentUser = this.authService.currentUserValue;
    this.getAdverts()

  }

  getAdverts() : Observable<Advert[]>{
    const id = this.authService.currentUserValue.id
    return this.http
      .get<Advert[]>('https://picom.herokuapp.com/ws/customer/' + id + '/adverts')
      .pipe(
        catchError(this.handleError('getAdverts', []))
      );
  }

  getAdvertById(id:number): Observable<Advert[]> {
    return this.http
      .get<Advert[]>('https://picom.herokuapp.com/ws/advert/' + id)
      .pipe(
        catchError(this.handleError('getAdvertById', []))
      );
  }

  addAdvert(advert:Advert) : Observable<Advert> {
    const id = this.authService.currentUserValue.id
    return this.http.post<Advert>('https://picom.herokuapp.com/ws/' +'advert/' + id ,  JSON.stringify(advert), httpOptions)
      .pipe(
        catchError(this.handleError('addAdvert', advert))
      );
  }

}
