import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInfo } from 'src/models/personal-info';
import { PerDonationprocessService } from '../services/per-donationprocess.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  public pInfoModel=new PersonalInfo();
  constructor(private router: Router,public dbPerDonService:PerDonationprocessService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/donation-start/']);
  }

  continue() {
    console.log(this.pInfoModel);
    this.dbPerDonService.StorePersonalDetails(this.pInfoModel);
    this.router.navigate(['/gifts/']);
  }

 

}
