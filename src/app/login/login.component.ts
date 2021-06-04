import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  public loginModel = new Login();
  ngOnInit(): void {
  }

  onFormSubmit(loginForm:any)
  {

    console.log(this.loginModel);

  }

  OnClickRegister()
  {
    console.log("Register Button");
    this.router.navigate(['Register']);
  }


}
