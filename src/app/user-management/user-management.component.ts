import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationModel } from 'src/models/registration';
import { LoginService } from '../services/login.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(public dbUserService:UsersService,public dbLoginService:LoginService,private router: Router) { }

  public users:any;
  public loginUser:any;
  public errorMsg:any ;
  // public curUserRole:any;

  ngOnInit(): void {

    console.log("Oninit Users");
    this.dbUserService.getUsers().subscribe(
      (data) => {this.users=data; console.log(data);},
      (error)=>{this.errorMsg=error},
      ()=>console.log("completed")
    );

    // this.dbLoginService.getLoginUsers().subscribe(
    //   (data) => {this.loginUser=data;
        
    //     this.loginUser.forEach((element: { userRole: any; }) => {

    //       this.curUserRole=element.userRole;
    //       console.log(this.curUserRole);
          
    //     });
        
        
    //     console.log(this.loginUser);},
    //   (error)=>{this.errorMsg=error},
    //   ()=>console.log("completed")
    // );

  }

  // public users: RegistrationModel[] = [
  //   { _id: 1, firstName: "Mike", lastName: "Smith", eMail: "Mike@gmail.com", userRole: "User", userID: "", passWord: "" },
  //   { _id: 2, firstName: "John", lastName: "Doe", eMail: "John@gmail.com", userRole: "Admin", userID: "", passWord: "" }
  // ];

  addUser() {
    this.router.navigate(['/register/']);
  }

  onSelect() {
    this.router.navigate(['/user-edit']);
  }

  deleteUser(user:any){

    console.log("inside delete");
      this.dbUserService.deleteUser(user._id).subscribe(() => {
      this.dbUserService.getUsers().subscribe(
        (data) => {this.users = data;console.log(data);},
        (error) => this.errorMsg = error
      )      
    });
  }
  editUser(user:any)
  {

    this.router.navigate(['/user-edit',user._id]);
  }

}
