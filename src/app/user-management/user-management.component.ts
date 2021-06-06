import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationModel } from 'src/models/registration';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public users: RegistrationModel[] = [
    { _id: 1, firstName: "Mike", lastName: "Smith", eMail: "Mike@gmail.com", userRole: "User", userID: "", passWord: "" },
    { _id: 2, firstName: "John", lastName: "Doe", eMail: "John@gmail.com", userRole: "Admin", userID: "", passWord: "" }
  ];

  addUser() {
    this.router.navigate(['/register/']);
  }

  onSelect() {
    this.router.navigate(['/user-edit']);
  }

}
