import { Component, EventEmitter, Output } from '@angular/core';
import { FormStatus } from '../../shared/interfaces/product';

@Component({
  selector: 'app-new-product-button',
  standalone: true,
  imports: [],
  templateUrl: './new-product-button.component.html',
  styleUrl: './new-product-button.component.scss'
})
export class NewProductButtonComponent {

  buttonTitle = 'New Product';
  formStatus: FormStatus = 'hidden';
  @Output() formStatusChanged = new EventEmitter<FormStatus>();

  handleFormButton(){

    if(this.formStatus === 'hidden'){
      this.formStatus = 'visible';
    } else {
      this.formStatus = 'hidden';
    }

    this.formStatusChanged.emit( this.formStatus );
  }
}
