import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RegistrationModel } from 'src/models/registration';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() getLoggedUser: EventEmitter<any> = new EventEmitter();
  private isLoggedIn: boolean;
  private userName: string | undefined;
  public users:any;
  public errorMsg:any;
  public isAdmin:boolean;


  private _url: string = "http://localhost:3000/api/Users";
  constructor(private http: HttpClient,private router: Router,public dbUserService:UsersService) {
    this.isLoggedIn = false;
    this.isAdmin=false;
  }

  getUsername() {
    return this.userName;
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

  authUser(username: string, password: string) {
    return this.http.get<RegistrationModel>(this._url + '/authenticate/' + username + '&' + password)
      .pipe(catchError(this.errorhandler));
  }

  loginUser(username: string) {
    this.isLoggedIn = true;
    this.userName = username;
    this.getLoggedUser.emit(this.userName);
  }

  logoutUser(): void {
    console.log(this.IsUserAdmin());
    console.log("logout service");
    this.isLoggedIn = false;
    this.userName = "";
    this.isAdmin=false;
    this.getLoggedUser.emit(this.userName);
    this.router.navigate(['']);
    
  }

  errorhandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }

  IsUserAdmin()
  {
    return this.isAdmin;

  }

}
