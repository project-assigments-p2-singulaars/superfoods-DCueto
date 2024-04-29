import { Component, OnInit } from '@angular/core';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { Product } from '../../shared/interfaces/product';
import { ProductsService } from '../../services/products.service';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductSearchComponent, ProductFormComponent, ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  inputValue!: string;
  productsList!: Product[];
  filteredProducts: Product[] = [];

  constructor( private productsService: ProductsService ){}

  ngOnInit(): void {
    this.productsList = this.productsService.getAllProducts();
  }

  handleInputData( data: any ){
    this.inputValue = data;
    this.filteredProducts = this.productsService.getProductsByName( this.inputValue );
  }
}
