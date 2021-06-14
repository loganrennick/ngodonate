import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  [x: string]: any;


  constructor(public auth: LoginService, private cookieService: CookieService, public router: Router) {
  }
  ngOnInit(): void {
    if (this.cookieService.check("user")) {
      this.auth.loginUser(this.cookieService.get("user"));
      if (this.cookieService.get("admin") === "true") {
        this.auth.isAdmin = true;
      }
    }
  }


  OnLogout() {
    console.log("logout");
    this.auth.logoutUser();
    this.cookieService.deleteAll();
  }

}
