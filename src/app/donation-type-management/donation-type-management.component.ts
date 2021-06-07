import { DonationType } from '../../models/donation-type';
import { Component, OnInit } from '@angular/core';
import { group } from '@angular/animations';

@Component({
  selector: 'app-donation-type-management',
  templateUrl: './donation-type-management.component.html',
  styleUrls: ['./donation-type-management.component.css']
})
export class DonationTypeManagementComponent implements OnInit {

  public groups: DonationType[] = [
    { id: 1, Name: "Step Up for Students" },
    { id: 2, Name: "Feed the Children" },
    { id: 3, Name: "American Heart Association" },
    { id: 4, Name: "Electronic Frontier Foundation" },
    { id: 5, Name: "Room to Read" }
  ];

  public edit: boolean[] = [];
  public editing: boolean = false;
  public userInput: string = "";

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.groups.length; i++) {
      this.edit.push(false);
    }
  }

  onClick(i: number, name: string) {
    if (this.edit[i])
      this.edit[i] = false;
    else
      this.edit[i] = true;
    this.userInput = name;
    this.editing = true;
  }


  onClickSubmit(i: number, ngo: string) {
    if (this.edit[i])
      this.edit[i] = false;
    else
      this.edit[i] = true;
    this.groups[i].Name = ngo;
    this.editing = false;
  }

}
