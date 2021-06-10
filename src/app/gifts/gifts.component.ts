import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInfo } from 'src/models/personal-info';
import { PerDonationprocessService } from '../services/per-donationprocess.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  public pInfoModel=new PersonalInfo();
  constructor(private router: Router,public dbPerDonService:PerDonationprocessService) { }


  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/personal-information/']);
  }

  continue() {
    console.log(this.pInfoModel);
    this.dbPerDonService.StoreDonationAmount(this.pInfoModel);
    this.router.navigate(['/shopping-cart/']);
  }

 

}
