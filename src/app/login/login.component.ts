import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Login, LoginToPost } from 'src/models/login';
import { LoginService } from '../services/login.service';
import { UsersService } from '../services/users.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router, public dbUserService: UsersService, public dbLoginService: LoginService,public popDlg:BsModalService) { }

  public loginModel = new LoginToPost();
  public users: any;
  public templog: any;
  public errorMsg: any;
  public validUser: any;
  public modalRef: any;

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
    this.validUser = false;
  }

  onFormSubmit(loginForm: any,template:TemplateRef<any>) {
   

    console.log(this.loginModel);
    //this.validUser = false;
    this.dbUserService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.users.forEach((element: { userID: any; passWord: any; userRole: any }) => {
          if (element.userID === this.loginModel.userID && element.passWord === this.loginModel.passWord) {
            this.validUser = true;
            
            console.log(this.validUser);
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
      () => {console.log("completed in login page"),console.log(this.validUser);
      if (this.validUser == false) {
        console.log("Not valid user");
        this.modalRef=this.popDlg.show(template);
        
      }
        
    }
      
    );
    
  }

  OnClickRegister() {
    console.log("Register Button");
    this.router.navigate(['register']);
  }

  OkButton()
  {
    this.modalRef.hide();
  }

}


