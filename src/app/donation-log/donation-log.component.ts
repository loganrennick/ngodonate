import { Component, OnInit } from '@angular/core';
import { DonateService } from '../services/donate.service';

@Component({
  selector: 'app-donation-log',
  templateUrl: './donation-log.component.html',
  styleUrls: ['./donation-log.component.css']
})
export class DonationLogComponent implements OnInit {

  public donations:any;
  public errorMsg:any;
  constructor(public dbDonationService:DonateService) { }

  ngOnInit(): void {

    this.dbDonationService.getDonations().subscribe(
      (data) => {this.donations=data; console.log(this.donations); 
        var stringfydata=JSON.stringify(this.donations);
        console.log(stringfydata);

          },
      (error)=>{this.errorMsg=error},
      ()=>console.log("completed")
    );


  }


}
