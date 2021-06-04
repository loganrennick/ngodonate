import { DonationType } from '../donation-type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation-type-management',
  templateUrl: './donation-type-management.component.html',
  styleUrls: ['./donation-type-management.component.css']
})
export class DonationTypeManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public groups: DonationType[] = [
    { id: 1, Name: "Step Up for Students" },
    { id: 2, Name: "Feed the Children" },
    { id: 3, Name: "American Heart Association" },
    { id: 4, Name: "Electronic Frontier Foundation" },
    { id: 5, Name: "Room to Read" }
  ]

}
