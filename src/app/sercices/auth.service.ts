import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: BehaviorSubject<boolean>



  constructor(private http: HttpClient) {
    this.token = new BehaviorSubject<boolean>(false);
  }

  login(email: string, password: string): Promise<any> {
    const options = {headers:new HttpHeaders       ({
        'Access-Control-Allow-Origin':'*'
      })}
    return this.http
      .post('http://localhost:8080/ws/login/'+email+'/'+password,
        {
      }, options)
      .toPromise()
      .then((resp:any) => {
        this.token.next(resp)
      })
  }

  logout(): Promise<void> {
    return new Promise<void>(
      (resolve, rejects) => {
        this.token.next(false);
        resolve();
      }
    )
  }
}
