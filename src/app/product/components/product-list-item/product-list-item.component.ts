import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../shared/interfaces/product';
import { ProductsService } from '../../services/products.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatButtonModule, MatInputModule],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {
  @Input() productName!: string;
  @Input() productImage!: string;
  @Input() productCalories!: number;
  quantityInputValue: number = 1;

  constructor( private productsService: ProductsService ){}

  sendProductToMenu( ){
    const product: Product = {
      name: this.productName,
      calories: this.productCalories,
      image: this.productImage,
      quantity: this.quantityInputValue
    }

    this.productsService.setDataProductToMenu( product );
  }
}
