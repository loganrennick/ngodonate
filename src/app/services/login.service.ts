import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RegistrationModel } from 'src/models/registration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  @Output() getLoggedUser: EventEmitter<any> = new EventEmitter();
  private isLoggedIn: boolean;
  private userName: string | undefined;

  private _url: string = "http://localhost:3000/api/Users";
  constructor(private http: HttpClient) {
    this.isLoggedIn = false;
  }

  getUsername() {
    return this.userName;
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

  authUser(username: string, password: string) {
    return this.http.get<RegistrationModel[]>(this._url + '/authenticate/' + username + '&' + password)
      .pipe(catchError(this.errorhandler));
  }

  loginUser(username: string) {
    this.isLoggedIn = true;
    this.userName = username;
    this.getLoggedUser.emit(this.userName);
  }

  logoutUser(): void {
    this.isLoggedIn = false;
    this.userName = "";
    this.getLoggedUser.emit(this.userName);
  }

  errorhandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }


}
