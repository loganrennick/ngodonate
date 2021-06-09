import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegistrationModel } from 'src/models/registration';
import { LoginService } from '../services/login.service';
import { UsersService } from '../services/users.service';
import { BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(public dbUserService:UsersService,public dbLoginService:LoginService,private router: Router,public popDlg:BsModalService) { }

  public users:any;
  public loginUser:any;
  public errorMsg:any ;
  public userToDel:any;
  // public curUserRole:any;
  public modalRef: any;

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

  deleteUserDlg(user:any,template:TemplateRef<any>){

    this.userToDel=user;

    this.modalRef=this.popDlg.show(template);

    // let dialogRef=this.dialog.open(PopDialogDeleteComponent,
    //   {
    //   height: '400px',
    //   width: '600px',
    // });
    // console.log("inside delete");
    //   this.dbUserService.deleteUser(user._id).subscribe(() => {
    //   this.dbUserService.getUsers().subscribe(
    //     (data) => {this.users = data;console.log(data);},
    //     (error) => this.errorMsg = error
    //   )      
    // });
  }
  deleteUser()
  {
       this.modalRef.hide();
      console.log("inside delete");
      this.dbUserService.deleteUser(this.userToDel._id).subscribe(() => {
      this.dbUserService.getUsers().subscribe(
        (data) => {this.users = data;console.log(data);},
        (error) => this.errorMsg = error
      )      
    });
  }

  CanceldeleteUser()
  {
    this.modalRef.hide();
  }

  editUser(user:any)
  {

    this.router.navigate(['/user-edit',user._id]);
  }

}
