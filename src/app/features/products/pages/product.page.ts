import {Component, inject} from '@angular/core';
import {ProductList} from '../components/product-list/product-list';
import {ActivatedRoute} from '@angular/router';
import type {Product} from '../models/product.model';

@Component({
  selector: 'app-product.page',
  imports: [
    ProductList
  ],
  template: `
    <app-product-list [products]="products"> </app-product-list>
  `,
  styles: ``
})
export default class ProductPage {


  private route = inject(ActivatedRoute);
  products :Array<Product> = this.route.snapshot.data['products'] as Product[];
}
