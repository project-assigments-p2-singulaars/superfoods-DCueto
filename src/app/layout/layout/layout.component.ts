import { Component } from '@angular/core';
import { ProductsPageComponent } from '../../product/pages/products-page/products-page.component';
import {MatGridListModule, MatGridTile} from '@angular/material/grid-list';
import { ProductListComponent } from '../../product/components/product-list/product-list.component';
import { ProductMenuComponent } from '../../product/components/product-menu/product-menu.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    ProductsPageComponent, MatGridListModule, MatGridTile, ProductListComponent, ProductMenuComponent,
    
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
