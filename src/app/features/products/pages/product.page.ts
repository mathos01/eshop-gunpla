import {Component, inject} from '@angular/core';
import {ProductList} from '../components/product-list/product-list';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import type {product} from '../models/product.model';

@Component({
  selector: 'app-product.page',
  imports: [
    ProductList,
    RouterOutlet
  ],
  template: `
    <app-product-list [products]="products"> </app-product-list>
    <router-outlet></router-outlet>
  `,
  styles: ``
})
export default class ProductPage {


  private route = inject(ActivatedRoute);
  products :Array<product> = this.route.snapshot.data['products'];
}
