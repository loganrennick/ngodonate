import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalInfo } from 'src/models/personal-info';

@Injectable({
  providedIn: 'root'
})
export class PerDonationprocessService {

  constructor() { }

  public perDonationProcessModel=new PersonalInfo();


 public StorePersonalDetails(data:any) {
  
    this.perDonationProcessModel.firstName=data.firstName;
    this.perDonationProcessModel.lastName=data.lastName;
    this.perDonationProcessModel.eMail=data.eMail;
    this.perDonationProcessModel.phoneNum=data.phoneNum;
    this.perDonationProcessModel.address=data.address;
    this.perDonationProcessModel.city=data.city;
    this.perDonationProcessModel.state=data.state;
    this.perDonationProcessModel.country=data.country;
    this.perDonationProcessModel.zip=data.zip;
    

    console.log("post method");
    console.log(data);
    console.log(this.perDonationProcessModel);
    return;
  }
  public StoreDonationAmount(data:any) {

    this.perDonationProcessModel.donationAmout=data.donationAmout;
    this.perDonationProcessModel.isMothlyRecurring=data.isMothlyRecurring;
    console.log(this.perDonationProcessModel);
  
  }
}





  
