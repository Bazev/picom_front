import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, identity, map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Advert} from "../../models/advert.model";
import {AuthService} from "../Auth/auth.service";
import {User} from "../../models/user.model";
import {HandleError, HttpErrorHandler} from "../../http-error-handler.service";

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

  annonces: BehaviorSubject<Array<Advert>>;


  constructor(private http: HttpClient, private authService: AuthService, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('advertService')
    this.currentUser = this.authService.currentUserValue;
    this.getAdverts()
    this.annonces = new BehaviorSubject<Array<Advert>>([]);

  }

  getAdverts(): Observable<Advert[]> {
    const id = this.authService.currentUserValue.id
    return this.http
      .get<Advert[]>('https://picom.herokuapp.com/ws/customer/' + id + '/adverts')
      .pipe(
        catchError(this.handleError('getAdverts', []))
      );
  }

  getAdvertById(id: number): Promise<Advert> {
    return this.http
      .get('https://picom.herokuapp.com/ws/advert/' + id)
      .pipe(
        map((data: any) => Advert.fromJson(data)))
      .toPromise()
      .then();
  }

  addAdvert(advert: Advert): Observable<Advert> {
    const id = this.authService.currentUserValue.id
    return this.http.post<Advert>('https://picom.herokuapp.com/ws/' + 'advert/' + id, JSON.stringify(advert), httpOptions)
      .pipe(
        catchError(this.handleError('addAdvert', advert))
      );
  }
}
