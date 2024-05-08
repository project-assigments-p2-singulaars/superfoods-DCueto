import { Component, effect, OnInit, WritableSignal } from '@angular/core';
import { EmptyProduct, Product } from '../../shared/interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-menu',
  standalone: true,
  imports: [],
  templateUrl: './product-menu.component.html',
  styleUrl: './product-menu.component.scss'
})
export class ProductMenuComponent implements OnInit {
  productRecieved;
  skipFirst = true;
  totalCalories: number;
  currentProductAmountCalories: number;

  menuList: Product[] = [];

  constructor( private ProductsService: ProductsService ){
    this.productRecieved = this.ProductsService.getDataProductToMenu();
    this.totalCalories = this.productRecieved().calories;
    this.currentProductAmountCalories = this.productRecieved().calories;

    effect(() => {

      if( Object.keys( this.productRecieved() ).length === 0 ){
        return;
      }

      if( this.skipFirst ){
        console.log('skipped');
        this.skipFirst = false;
        return;
      }


      if( this.isProduct( this.productRecieved() ) ){
        // const existingMenuProduct = this.menuList.findIndex( (menuItem) => {
        //   return menuItem.name === this.productRecieved().name;
        // });

        // if( existingMenuProduct > -1 ){
        //   console.log( existingMenuProduct );
        //   this.menuList[existingMenuProduct].quantity += this.productRecieved().quantity;
        //   console.log( this.menuList );
        //   return;
        // }

        // console.log( this.menuList );

        this.currentProductAmountCalories = this.productRecieved().calories * this.productRecieved().quantity;
        this.totalCalories += this.productRecieved().calories * this.productRecieved().quantity;
        this.menuList = [ ...this.menuList, this.productRecieved() as Product ];
      }

    });

  }

  isProduct( product: Product | EmptyProduct ): product is Product {
    return 'name' in product ;
  }

  ngOnInit(): void {

  }

  // ngOnChanges(changes: any): void {
  //   if( changes['this.productReceived()'].isFirstChange() ){
  //     console.log('First Change!');
  //   }

  //   console.log('changes');
  // }

}
