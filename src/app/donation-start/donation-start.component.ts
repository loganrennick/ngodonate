import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationType } from 'src/models/donation-type';

@Component({
  selector: 'app-donation-start',
  templateUrl: './donation-start.component.html',
  styleUrls: ['./donation-start.component.css']
})
export class DonationStartComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public groups: DonationType[] = [
    { id: 1, Name: "Step Up for Students" },
    { id: 2, Name: "Feed the Children" },
    { id: 3, Name: "American Heart Association" },
    { id: 4, Name: "Electronic Frontier Foundation" },
    { id: 5, Name: "Room to Read" }
  ];

  onClick() {
    this.router.navigate(['/personal-information/']);
  }

}
