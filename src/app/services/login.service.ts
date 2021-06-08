import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login, LoginToPost } from 'src/models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url: string = "http://localhost:3000/api/logins";
  constructor(private http: HttpClient) { }

  postIntoLogin(record: any): Observable<LoginToPost[]> {

    return this.http.post<LoginToPost[]>(this._url, record)
      .pipe(catchError(this.errorhandler));
  }
  getLoginUsers(): Observable<Login[]> {
    return this.http.get<Login[]>(this._url)
      .pipe(catchError(this.errorhandler));
  }

  deleteLoginUser(id: any) {
    return this.http.delete(this._url + '/' + id);
  }
  errorhandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }


}
