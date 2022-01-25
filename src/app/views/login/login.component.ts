import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/Auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;


  constructor(private authService: AuthService, private router: Router) {
    this.email = "";
    this.password = "";
  }

  ngOnInit() {
  }

  onSubmitLoginForm(form: NgForm): void {
    if (form.valid) {
      this.authService
        .login(this.email, this.password)
        .then(() => {
          this.router.navigateByUrl('adverts')
        })
    }
  };


}
