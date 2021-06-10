import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PersonalInfo } from 'src/models/personal-info';

@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {
  private _url: string = "http://localhost:3000/api/PersonalInfo";
  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }

  deletePersonalInfo(id: any) {
    return this.http.delete(this._url + '/' + id)
      .pipe(catchError(this.errorHandler));
  }

  getPersonalInfo(userid: any): Observable<PersonalInfo[]> {
    return this.http.get<PersonalInfo[]>(this._url + '/User/' + userid).pipe(catchError(this.errorHandler));
  }

  postPersonalInfo(record: any): Observable<PersonalInfo[]> {
    return this.http.post<PersonalInfo[]>(this._url, record)
      .pipe(catchError(this.errorHandler));
  }

  updatePersonalInfo(id: any, record: any): Observable<PersonalInfo[]> {
    return this.http.put<PersonalInfo[]>(this._url + '/' + id, record)
      .pipe(catchError(this.errorHandler));
  }
}
