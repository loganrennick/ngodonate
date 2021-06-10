import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Gift } from 'src/models/gift';

@Injectable({
  providedIn: 'root'
})
export class DonateService {
  private _url: string = "http://localhost:3000/api/Donate";
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
}
