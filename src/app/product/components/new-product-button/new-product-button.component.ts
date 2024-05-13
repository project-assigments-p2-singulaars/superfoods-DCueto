import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormStatus } from '../../shared/interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-new-product-button',
  standalone: true,
  imports: [],
  templateUrl: './new-product-button.component.html',
  styleUrl: './new-product-button.component.scss'
})
export class NewProductButtonComponent {

  productsService = inject( ProductsService );
  buttonTitle = 'New Product';

  handleFormButton(){
    this.productsService.toggleNewProductModalState();
  }
}
