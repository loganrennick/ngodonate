import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user_Id: any;
  user: any;
  errorMsg: any;
  users: any;

  constructor(private router: Router, private dbUserService: UsersService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      //console.log(id)
      this.user_Id = id;
      console.log(this.user_Id);
      this.user = this.dbUserService.getUserById(this.user_Id).subscribe(
        (data) => {
          this.user = data; //console.log(data);
        },
        (error) => {
          this.errorMsg = error; //console.log(error);
        }
      );
    });


  }

  onFormSubmit(EditRegistrationForm: any) {

    console.log(this.user);
    console.log(this.user_Id);
    this.dbUserService.updateUser(this.user_Id, this.user).subscribe(
<<<<<<< HEAD
       (data) => {this.user = data; console.log(data);
        this.user = this.dbUserService.getUsers().subscribe(
          (data) => {this.user = data; console.log(data);},
          (error) => {this.errorMsg = error; console.log(error);}
        );},
       (error) => {this.errorMsg = error; console.log(error);}         
           
    );
   
    
    this.router.navigate(['/user-management']);
=======
      (data) => {
        this.user = data; console.log(data);
        this.user = this.dbUserService.getUsers().subscribe(
          (data) => {
            this.user = data; console.log(data);
            this.router.navigate(['/user-management']);
          },
          (error) => { this.errorMsg = error; console.log(error); }
        );
      },
      (error) => { this.errorMsg = error; console.log(error); }


    );



>>>>>>> d97ca7b69af30e20600b7cc2a2ad12577a2f2023
  }
  OnClickCancel() {
    this.router.navigate(['/user-management/']);
  }


}
