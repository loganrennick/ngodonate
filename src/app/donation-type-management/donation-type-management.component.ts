import { DonationType } from '../../models/donation-type';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { DonationTypeService } from '../services/donation-type.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-donation-type-management',
  templateUrl: './donation-type-management.component.html',
  styleUrls: ['./donation-type-management.component.css']
})
export class DonationTypeManagementComponent implements OnInit {

  public groups: any;
  public edit: boolean[] = [];
  public editing: boolean = false;
  public userInput: string = "";
  public isPopupVisible: boolean = false;
  groupModel = new DonationType();
  group: any;
  errorMsg: any;
  modalRef: any;

  constructor(private ngoService: DonationTypeService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.ngoService.getDonationTypes().subscribe(
      (data) => {
        this.groups = data;
        console.log(data);
        for (let i = 0; i < this.groups.length; i++) {
          this.edit.push(false);
        }
      },
      (error) => this.errorMsg = error
    )
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addGroup() {
    this.ngoService.postDonationType(this.groupModel).subscribe(
      (data) => {
        this.group = data;
        this.ngoService.getDonationTypes().subscribe(
          (data) => {
            this.groups = data;
            this.groupModel = new DonationType();
            this.edit.push(false);
            this.modalRef.hide();
          },
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
  }

  deleteGroup(id: any) {
    this.ngoService.deleteDonationType(id).subscribe(
      (data) => {
        this.group = data;
        this.ngoService.getDonationTypes().subscribe(
          (data) => {
            this.groups = data;
            this.edit = [];
            for (let i = 0; i < this.groups.length; i++) {
              this.edit.push(false);
            }
          },
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
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
