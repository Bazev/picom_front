import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {AuthService} from "../services/Auth/auth.service";
import {Router} from "@angular/router";
import {User} from "../models/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUserSubject : BehaviorSubject<User>;
  currentUser : Observable<User>


  constructor(private authService:AuthService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable()
  }


  onClickLogout() : void {
    this.authService
      .logout()
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
  }

}
