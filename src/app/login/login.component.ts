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

  constructor(public router: Router, public dbUserService: UsersService, public auth: LoginService, public popDlg: BsModalService) { }

  public loginModel = new LoginToPost();
  public users: any;
  public templog: any;
  public errorMsg: any;
  public validUser: boolean = false;
  public modalRef: any;

  ngOnInit(): void {
  }

  onFormSubmit(loginForm: any, template: TemplateRef<any>) {
    this.auth.authUser(this.loginModel.userID, this.loginModel.passWord).subscribe(
      (data) => {
        console.log(data);
        if (data != null) {
          this.auth.loginUser(this.loginModel.userID);
          this.router.navigate(['/user-management/']);
        }
        else {
          this.modalRef = this.popDlg.show(template);
        }
      },
      (error) => { this.errorMsg = error }
    )
  }


  OnClickRegister() {
    this.router.navigate(['register']);
  }

  OkButton() {
    this.modalRef.hide();
  }


}


