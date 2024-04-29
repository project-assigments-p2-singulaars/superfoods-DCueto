import { Component } from '@angular/core';
import { ProductListComponent } from '../../product/components/product-list/product-list.component';
import { ProductComponent } from '../../product/components/product/product.component';
import { ProductsPageComponent } from '../../product/pages/products-page/products-page.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ProductsPageComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
