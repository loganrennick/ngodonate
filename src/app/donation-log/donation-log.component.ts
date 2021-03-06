import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { DonateService } from '../services/donate.service';
import { PersonalInformationService } from '../services/personal-information.service';

@Component({
  selector: 'app-donation-log',
  templateUrl: './donation-log.component.html',
  styleUrls: ['./donation-log.component.css']
})
export class DonationLogComponent implements OnInit {

  public donations: any;
  public errorMsg: any;
  public person: any;
  public name: any;
  public donationLog: any[] = [];


  constructor(public dbDonationService: DonateService, public dbPersonalService: PersonalInformationService) { }

  ngOnInit(): void {

    let tName: any;
    let tAmount: any;
    let tDonationType: any;
    let tDate: any;

    this.dbDonationService.getDonations().subscribe(
      (data) => {
        this.donations = data; console.log(this.donations);
        for (const iterator of this.donations) {
         
          console.log(tDate);
          this.dbPersonalService.getPersonalInfoDonation(iterator.personalInfoId).subscribe(
            (pdata) => {
              this.person = pdata; console.log(pdata);
              tName = pdata.firstName + " " + pdata.lastName;
              for (const g of iterator.gifts) {
                tAmount = g.price * g.quantity;
                tDonationType = g.donationName;
                tDate = g.donationDate;

                this.donationLog.push({ tName, tAmount, tDonationType, tDate });
                //console.log(this.donationLog);
              }

              console.log(this.donationLog);

            }
            ,
            (error) => { this.errorMsg = error },
            () => console.log("completed")

          );
        }

      },
      (error) => { this.errorMsg = error },
      () => {
        console.log("completed")
      }
    );
  }
}
