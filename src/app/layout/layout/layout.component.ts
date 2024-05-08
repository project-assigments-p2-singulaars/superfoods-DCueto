import { Component } from '@angular/core';
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
