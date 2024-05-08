import { Injectable, signal } from '@angular/core';
import { foods, setFood } from '../../data/foods';
import { EmptyProduct, Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productDataToMenu = signal<Product >({
    name: 'init',
    calories: 0,
    image: 'init',
    quantity: 0
  });

  constructor() { }

  getAllProducts(){
    return foods;
  }

  getProductsByName( name: string ){
    return foods.filter( ( product: Product ) =>
      product.name.toLowerCase().includes( name.toLowerCase() )
    );
  }

  setDataProductToMenu( dataProduct: Product ){
    this.productDataToMenu.set( dataProduct );
  }

  getDataProductToMenu(){
    return this.productDataToMenu;
  }

  setNewProduct( product: Product ){
    setFood( product );
  }
}
