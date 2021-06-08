import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationType } from 'src/models/donation-type';
import { DonationTypeService } from '../services/donation-type.service';

@Component({
  selector: 'app-donation-start',
  templateUrl: './donation-start.component.html',
  styleUrls: ['./donation-start.component.css']
})
export class DonationStartComponent implements OnInit {

  constructor(public router: Router, private ngoService: DonationTypeService) { }

  public groups: any;
  errorMsg: any;

  ngOnInit(): void {
    this.ngoService.getDonationTypes().subscribe(
      (data) => {
        this.groups = data;
        console.log(data);
      },
      (error) => this.errorMsg = error
    )
  }

  onClick() {
    this.router.navigate(['/personal-information/']);
  }

}
