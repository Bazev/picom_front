import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject : BehaviorSubject<User>;
  public currentUser : Observable<User>
  //token: BehaviorSubject<boolean>



  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable()
   // this.token = new BehaviorSubject<boolean>(false);
  }

  public get currentUserValue() : User {
    return this.currentUserSubject.value;
  }

  login(email: string, password:string) {
    const options = {headers:new HttpHeaders ({
               'Access-Control-Allow-Origin':'*'
             })}
    return this.http.post<any>('http://localhost:8080/ws/login/'+email+'/'+password, options)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;

      }))
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(this.currentUserValue) ;
  }
}