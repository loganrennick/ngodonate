import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RegistrationModel, RegistrationModelToPost } from 'src/models/registration';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url:string="http://localhost:3000/api/users";
  constructor(private http : HttpClient) { }

  postIntoUsers(record: any): Observable<RegistrationModelToPost[]>{
    return this.http.post<RegistrationModelToPost[]>(this._url, record)
    .pipe(catchError(this.errorhandler));
  }
  getUsers():Observable<RegistrationModel[]>
  {
     return this.http.get<RegistrationModel[]>(this._url)
    .pipe(catchError(this.errorhandler));
 
  }
  public getUserById(id:number):Observable<RegistrationModel[]>
 {
    //console.log(this._url +'/' + id);
   return this.http.get<RegistrationModel[]>(this._url +'/' + id)
   .pipe(catchError(this.errorhandler));

 }

  deleteUser(id: any) {
    return this.http.delete(this._url + '/' + id);
  }


  updateUser(id: number, user: any): Observable<RegistrationModel[]>{
    //console.log(user)
    return this.http.put<RegistrationModel[]>(this._url + '/' + id, user)
    .pipe(catchError(this.errorhandler));
  }

  errorhandler(error:HttpErrorResponse)
 {
   return throwError(error.message || "Server error");
 }

}
