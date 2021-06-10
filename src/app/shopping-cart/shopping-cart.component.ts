import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Gift } from 'src/models/gift';
import { DonateService } from '../services/donate.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router, private modalService: BsModalService, private donateService: DonateService) { }

  gifts: any;
  modalRef: any;
  gift: any;
  data: any;
  errorMsg: any;

  ngOnInit(): void {
    this.gifts = this.donateService.getGifts();
  }

  openModal(template: TemplateRef<any>, gift: any) {
    this.gift = gift;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm ' });
  }

  updateQuantity() {
    this.modalRef.hide();
  }

  getTotal() {
    let total: number = 0;
    for (let item of this.gifts) {
      total = total + (item.quantity * item.price);
    }
    return total;
  }

  getItemCount() {
    let total: number = 0;
    for (let item of this.gifts) {
      total = total + item.quantity;
    }
    return total;
  }

  addDonation() {
    this.router.navigate(['/donation-start/']);
  }

  cancel() {
    this.router.navigate(['/gifts/']);
  }

  purchase() {
    this.donateService.purchase(this.gifts).subscribe(
      (data) => {
        this.data = data;
        this.router.navigate(['/thank-you/']);
      },
      (error) => {
        this.errorMsg = error;
      }
    )
  }
}
