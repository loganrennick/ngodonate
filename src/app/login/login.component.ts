import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, LoginToPost } from 'src/models/login';
import { LoginService } from '../services/login.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public dbUserService: UsersService, public dbLoginService: LoginService) { }

  public loginModel = new LoginToPost();
  public users: any;
  public templog: any;
  public errorMsg: any;
  public validUser: boolean = false;

  ngOnInit(): void {
    this.dbLoginService.getLoginUsers().subscribe(
      (data) => {
        this.users = data; console.log(this.users);
        this.users.forEach((element: { _id: any; }) => {
          this.dbLoginService.deleteLoginUser(element._id).subscribe();
        });
      },
      (error) => { this.errorMsg = error },
      () => console.log("completed")
    );
  }

  onFormSubmit(loginForm: any) {
    console.log(this.loginModel);
    this.dbUserService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.users.forEach((element: { userID: any; passWord: any; userRole: any }) => {
          if (element.userID === this.loginModel.userID && element.passWord === this.loginModel.passWord) {
            this.validUser = true;
            this.loginModel.userRole = element.userRole; // role from user registration component
            this.dbLoginService.postIntoLogin(this.loginModel).subscribe(
              (data) => {
                this.templog = data; console.log(this.templog);
              },
              (error) => this.errorMsg = error
            );
            console.log(this.validUser);
            this.router.navigate(['/user-management/']);
            return;
          }
        });
      },
      (error) => { this.errorMsg = error },
      () => console.log("completed")
    );
    if (this.validUser == false) {
      console.log("Not valid user");
    }
  }

  OnClickRegister() {
    console.log("Register Button");
    this.router.navigate(['register']);
  }


}
