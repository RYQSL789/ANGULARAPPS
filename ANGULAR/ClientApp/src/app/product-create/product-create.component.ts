import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { ProductsService } from '../services/products';
import { MyValidations } from '../validators/validations';




@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
})
export class ProductCreateComponent implements OnInit {

  //producto: Product;

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      console.log(product);
      this.productsService.addProduct(product)
        .subscribe((newProduct) => {
          this.router.navigate(['./product-list']);
        });
    }
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      id: "1000",
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidations.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }


  get priceField() {
    return this.form.get('price');
  }

}
