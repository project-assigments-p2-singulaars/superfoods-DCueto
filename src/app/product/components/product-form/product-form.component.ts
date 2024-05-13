import { Component } from '@angular/core';
import { Product } from '../../shared/interfaces/product';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  formData!: Product;
  productForm = new FormGroup({
    productNameInput: new FormControl('', {nonNullable: true}),
    productCaloriesInput: new FormControl(1, {nonNullable: true}),
    productImageInput: new FormControl('', {nonNullable: true}),
  });

  constructor( private productsService: ProductsService ){}

  handleFormSubmit(){

    this.formData = {
      name: this.productForm.value.productNameInput as string,
      calories: this.productForm.value.productCaloriesInput as number,
      image: this.productForm.value.productImageInput as string,
      quantity: 0
    }

    this.productsService.setNewProduct( this.formData );
    this.productForm.reset();
    this.productsService.toggleNewProductModalState();
  }

}
