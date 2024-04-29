import { Injectable } from '@angular/core';
import foods from '../../data/foods';
import { Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAllProducts(){
    return foods;
  }

  getProductsByName( name: string ){
    return foods.filter( ( product: Product ) => 
      product.name.toLowerCase().includes( name.toLowerCase() )
    );
  }
}
