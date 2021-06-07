import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['/personal-information/']);
  }

  continue() {
    this.router.navigate(['/shopping-cart/']);
  }


}
