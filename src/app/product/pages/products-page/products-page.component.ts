import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductMenuComponent } from '../../components/product-menu/product-menu.component';
import { NewProductModalComponent } from '../../modals/new-product-modal/new-product-modal.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductListComponent, ProductMenuComponent, NewProductModalComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {

}
