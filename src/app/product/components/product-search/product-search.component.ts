import { Component, effect, EventEmitter, inject, input, Output } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [MatInputModule, FormsModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss'
})
export class ProductSearchComponent {
  productService = inject( ProductsService );
  value = this.productService.searchText;
}
