import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';


import { ProductsService } from '../services/products';
import { MyValidations } from '../validators/validations';




@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
})
export class ProductEditComponent implements OnInit {

  //producto: Product;

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  )
  {
    this.buildForm();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.productsService.getProduct(params.id).subscribe(p => this.form.patchValue(p));
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      console.log(product);
      this.productsService.edidProduct(product)
        .subscribe((newProduct) => {
          this.router.navigate(['./product-list']);
        });
    }
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      id: this.id,
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
