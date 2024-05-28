import { Component, OnInit, Signal } from '@angular/core';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { FormStatus, Product } from '../../shared/interfaces/product';
import { ProductsService } from '../../services/products.service';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { NewProductButtonComponent } from '../new-product-button/new-product-button.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductSearchComponent, ProductFormComponent, ProductListItemComponent, NewProductButtonComponent, MatSlideToggleModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  productsList: Signal<Product[]> = this.productsService.filteredFoodProducts;

  constructor( private productsService: ProductsService ){}

  ngOnInit(): void {
  }
}
