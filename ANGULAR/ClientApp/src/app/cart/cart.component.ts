import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { CartService } from '../services/cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})

export class CartComponent implements OnInit {

  total$: Observable<number>;

  constructor(
    private cartService: CartService
  )
  {
    this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      );
  }

  ngOnInit() {
  }

}
