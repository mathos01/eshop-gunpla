import {Component, inject} from '@angular/core';
import {ProductList} from '../components/product-list/product-list';
import {ActivatedRoute} from '@angular/router';
import type {Product} from '../models/product.model';
import {CartSummary} from '../components/cart-summary/cart-summary';

@Component({
  selector: 'app-product.page',
  imports: [
    ProductList,
    CartSummary
  ],
  template: `
    <div class="flex">
      <app-product-list [products]="products"> </app-product-list>
      <app-cart-summary></app-cart-summary>
    </div>
  `,
  styles: `.flex{
    display: flex;
    flex-direction: row;
  }`
})
export default class ProductPage {


  private route = inject(ActivatedRoute);
  products :Array<Product> = this.route.snapshot.data['products'] as Product[];
}
