import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss'
})
export class ProductSearchComponent {
  @Output() search = new EventEmitter<string>();

  sendInputValue( event: any ){
    this.search.emit( event.target.value.trim() );
  }
}
