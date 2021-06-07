import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/models/login';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router,public dbUserService:UsersService) { }
  
  public loginModel = new Login();
  public users:any;
  public errorMsg:any ;
  public validUser:boolean = false;

  ngOnInit(): void {
  }

  onFormSubmit(loginForm: any) {

    console.log(this.loginModel);

    this.dbUserService.getUsers().subscribe(
      (data) => {
        this.users = data;

        this.users.forEach((element: { userID: any; passWord: any }) => {

          //console.log(element.userID);

          if (element.userID === this.loginModel.userID && element.passWord === this.loginModel.passWord) {

            this.validUser = true;
            console.log(this.validUser);
            this.router.navigate(['/user-management/']);
            return;

          }

        });
      },

      (error) => { this.errorMsg = error },
      () => console.log("completed")

    );

    if(this.validUser == false)
    {
      console.log("Not valid user");
    }

  }

  OnClickRegister() {
    console.log("Register Button");
    this.router.navigate(['register']);
  }


}
