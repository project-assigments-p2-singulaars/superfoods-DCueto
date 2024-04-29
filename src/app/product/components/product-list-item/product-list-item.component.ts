import { Component, Input } from '@angular/core';
import { ProductCounterComponent } from '../product-counter/product-counter.component';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [ProductCounterComponent],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {
  @Input() productName!: string;
  @Input() productImage!: string;
  @Input() productCalories!: number;
}
