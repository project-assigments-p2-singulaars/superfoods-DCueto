import { Component, computed, effect, inject, OnInit, Signal, WritableSignal } from '@angular/core';
import { EmptyProduct, Product } from '../../shared/interfaces/product';
import { ProductsService } from '../../services/products.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-product-menu',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './product-menu.component.html',
  styleUrl: './product-menu.component.scss'
})
export class ProductMenuComponent implements OnInit {
  productsService = inject( ProductsService );
  menuList: Signal<Product[]> = this.productsService.menuProducts;
  totalCalories = this.productsService.totalMenuCalories;

  isProduct( product: Product | EmptyProduct ): product is Product {
    return 'name' in product ;
  }

  ngOnInit(): void {

  }

}
