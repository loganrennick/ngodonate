import { formatDate } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Donation } from 'src/models/donation';
import { Gift } from 'src/models/gift';

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  private _url: string = "http://localhost:3000/api/Donation";
  private personalInfoId: string = "";
  private gifts: Gift[] = [];
  private donationName = "";

  constructor(private http: HttpClient) { }

  public storePersonalDetails(id: string) {
    this.personalInfoId = id;
  }

  public storeDonationType(type: string) {
    this.donationName = type;
  }

  public storeGift(gift: Gift) {
    gift.donationName = this.donationName;
    this.gifts.push(gift);
  }

  public getGifts() {
    return this.gifts;
  }

  public purchase(gifts: any): Observable<Donation[]> {
    let donation = new Donation();
    donation.gifts = gifts;
    donation.personalInfoId = this.personalInfoId;
    donation.donationDate=formatDate(Date.now(), 'yyyy/MM/dd', 'en');
    console.log("Date in purchase");
    console.log(donation.donationDate);
    return this.http.post<Donation[]>(this._url, donation)
      .pipe(catchError(this.errorHandler));
  }

  public getDonations():Observable<Donation[]>
  {

    return this.http.get<Donation[]>(this._url)
    .pipe(catchError(this.errorHandler));

  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }
}
