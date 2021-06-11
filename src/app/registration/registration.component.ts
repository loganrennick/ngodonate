import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationModel, RegistrationModelToPost } from 'src/models/registration';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private dbUserService: UsersService, private router: Router) { }

  public regModel = new RegistrationModelToPost();

  user: any;
  users: any;
  errorMsg: any;
  isDataValid: any = true;

  ngOnInit(): void {
    this.users = this.dbUserService.getUsers().subscribe(
      (data) => { this.users = data; console.log(data); },
      (error) => { this.errorMsg = error; console.log(error); }
    );
  }

  onFormSubmit(RegistrationForm: any) {
    this.dbUserService.postIntoUsers(this.regModel).subscribe(
<<<<<<< HEAD
      (data) => {this.user = data;console.log(data);
        this.users = this.dbUserService.getUsers().subscribe(
          (data) => {this.users = data; console.log(data);},
          (error) => {this.errorMsg = error; console.log(error);}
        );    
        },
    (error) => this.errorMsg = error
    );

    
  this.router.navigate(['/user-management/']);

=======
      (data) => {
        this.user = data; console.log(data);
        this.users = this.dbUserService.getUsers().subscribe(
          (data) => {
            this.users = data; console.log(data);
            this.router.navigate(['/user-management/']);
          },
          (error) => { this.errorMsg = error; console.log(error); }
        );
      },
      (error) => this.errorMsg = error
    );
>>>>>>> d97ca7b69af30e20600b7cc2a2ad12577a2f2023
  }

  OnClickCancel() {
    this.router.navigate(['/user-management/']);
  }

}
