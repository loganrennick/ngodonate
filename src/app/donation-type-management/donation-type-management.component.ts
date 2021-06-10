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

  public groups: any; // DonationType[]
  public edit: boolean[] = []; // status of each donation type - are they being edited?
  public editing: boolean = false; // is a donation type being edited
  groupModel = new DonationType();
  group: any; // DonationType
  errorMsg: any;
  modalRef: any;
  modalRef2: any;
  currID: any;

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
    this.modalRef = this.modalService.show(template, { id: 1, class: 'first' });
  }

  openModal2(template: TemplateRef<any>) {
    this.modalRef2 = this.modalService.show(template, { id: 2, class: 'second' });
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

  deleteDialog(id: any, template: TemplateRef<any>) {
    console.log(id);
    console.log(template);
    this.openModal2(template);
    this.currID = id;
  }

  closeDeleteDialog() {
    this.currID = "";
    this.modalRef2.hide();
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
            this.closeDeleteDialog();
          },
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
  }

  updateGroup(i: number, id: any) {
    if (this.edit[i])
      this.edit[i] = false;
    else
      this.edit[i] = true;
    this.ngoService.updateDonationType(id, this.groupModel).subscribe(
      (data) => {
        this.group = data;
        this.ngoService.getDonationTypes().subscribe(
          (data) => {
            this.groups = data;
            this.editing = false;
            this.groupModel = new DonationType();
          },
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
  }

  startEdit(i: number, name: string) {
    if (this.edit[i])
      this.edit[i] = false;
    else
      this.edit[i] = true;
    this.groupModel.Name = name;
    this.editing = true;
  }

}
