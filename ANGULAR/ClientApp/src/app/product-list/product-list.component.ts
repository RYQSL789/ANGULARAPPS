import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {

  products = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(p => {
        this.products = p;
      });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)  
      .subscribe(r => {
        this.fetchProducts();
      });
    console.log(id);
  }

}
