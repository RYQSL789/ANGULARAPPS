import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [];
  server: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.server = baseUrl;
  }

  getAllProducts() {
    return this.http.get<Product[]>(this.server + 'api/Product');
  }

  getProduct(id: string) {
    return this.http.get<Product>(this.server + 'api/Product/' + id);
  }

  addProduct(product: Product) {
    return this.http.post<boolean>(this.server + 'api/Product/', product);
  }

  edidProduct(product: Product) {
    return this.http.put<boolean>(this.server + 'api/Product/', product);
  }

  deleteProduct(id: string) {
    return this.http.delete<boolean>(this.server + 'api/Product/' + id);
  }
}
