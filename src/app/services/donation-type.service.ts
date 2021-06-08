import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DonationType } from 'src/models/donation-type';

@Injectable({
  providedIn: 'root'
})
export class DonationTypeService {

  private _url: string = "http://localhost:3000/api/DonationTypes";
  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }

  deleteDonationType(id: any) {
    return this.http.delete(this._url + '/' + id)
      .pipe(catchError(this.errorHandler));
  }

  getDonationTypes(): Observable<DonationType[]> {
    return this.http.get<DonationType[]>(this._url).pipe(catchError(this.errorHandler));
  }

  postDonationType(record: any): Observable<DonationType[]> {
    return this.http.post<DonationType[]>(this._url, record)
      .pipe(catchError(this.errorHandler));
  }

}
