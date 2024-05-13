import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ProductsService } from '../../services/products.service';
import { ProductFormComponent } from '../../components/product-form/product-form.component';

@Component({
  selector: 'app-new-product-modal',
  standalone: true,
  imports: [ModalComponent, ProductFormComponent],
  templateUrl: './new-product-modal.component.html',
  styleUrl: './new-product-modal.component.scss'
})
export class NewProductModalComponent {

  modalState = this.productsService.newProductModalState;

  constructor( private productsService: ProductsService ){}

  handleCloseModalBtn(){
    this.modalState.set('hidden');
  }

  onModalClick( event: MouseEvent ){
    event.stopImmediatePropagation();

    const target = event.target as HTMLElement;
    if( target.classList.contains('modal') ){
      this.modalState.set('hidden');
    }

  }

}
