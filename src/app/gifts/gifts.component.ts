import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gift } from 'src/models/gift';
import { PersonalInfo } from 'src/models/personal-info';
import { DonateService } from '../services/donate.service';
import { PerDonationprocessService } from '../services/per-donationprocess.service';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  public pInfoModel = new Gift();
  constructor(private router: Router, public donateService: DonateService) { }


  ngOnInit(): void {
    this.pInfoModel.price = 10.00
  }

  cancel() {
    this.router.navigate(['/personal-information/']);
  }

  continue() {
    console.log(this.pInfoModel);
    this.donateService.storeGift(this.pInfoModel);
    this.router.navigate(['/shopping-cart/']);
  }



}
