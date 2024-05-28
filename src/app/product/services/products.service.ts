import { computed, Injectable, signal, effect, Signal, WritableSignal } from '@angular/core';
import { foods, setFood } from '../../data/foods';
import { EmptyProduct, Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  searchText = signal<string>('');
  foodProducts = signal<Product[]>( foods );
  filteredFoodProducts = computed<Product[]>( () => {
    return this.foodProducts().filter( ( product ) => product.name.toLowerCase().includes( this.searchText().toLowerCase() ) );
  });

  menuProducts = signal<Product[]>([]);
  totalMenuCalories = computed<number>( () => this.menuProducts().reduce( ( a, b ) => a += b.calories * b.quantity, 0 ) );

  newProductModalState: WritableSignal<'visible' | 'hidden'> = signal('hidden');

  constructor( ){
    effect( () => console.log( this.searchText() )  );
  }

  setProductToMenu( product: Product ){
    this.menuProducts.update( ( currentList ) => {
      const sameProduct = currentList.findIndex( ( productOnList ) => productOnList.name === product.name );
      let newProductMenu = [...currentList];

      if( sameProduct >= 0 ){
        newProductMenu[ sameProduct ].quantity += product.quantity;
        return newProductMenu;
      }

      return [ product, ...currentList ];
    });
  }

  setNewProduct( product: Product ){
    this.foodProducts.update( ( current ) => {
      return [ product, ...current ];
    });

    console.log( this.foodProducts );
  }

  getMenuFoodCalories( product: Product ): number{
    return product.calories * product.quantity;
  }

  toggleNewProductModalState(){
    if(this.newProductModalState() === 'hidden'){
      this.newProductModalState.set('visible');
    } else {
      this.newProductModalState.set('hidden');
    }
  }
}
