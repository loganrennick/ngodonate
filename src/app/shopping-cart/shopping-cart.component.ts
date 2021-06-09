import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router, private modalService: BsModalService) { }

  modalRef: any;
  quantity: any = 1;

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  updateQuantity() {
    this.modalRef.hide();
  }

  cancel() {
    this.router.navigate(['/gifts/']);
  }

  continue() {
    this.router.navigate(['/thank-you/']);
  }

}
