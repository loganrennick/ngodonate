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

  users: any
  errorMsg: any;

  ngOnInit(): void {
  }

  onFormSubmit(RegistrationForm:any)
  {
    
    //this.regModel.userRole="User"; //setting the role as User

    this.dbUserService.postIntoUsers(this.regModel).subscribe(
      (data) => {this.users = data;console.log(data);
        },
    (error) => this.errorMsg = error
    );

  this.router.navigate(['/user-management/']);

  }
  OnClickCancel()
  {
    this.router.navigate(['/user-management/']);
  }

}
