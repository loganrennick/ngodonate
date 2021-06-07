import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/gifts/']);
  }

  continue() {
    this.router.navigate(['/thank-you/']);
  }

}
