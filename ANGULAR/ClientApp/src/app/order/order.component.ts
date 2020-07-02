import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit() {
  }

}
