import {Component, inject, input} from '@angular/core';
import type { product } from '../../models/product.model';
import {ProductCard} from '../product-card/product-card';
import {ActivatedRoute} from '@angular/router';
// product-list.ts
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  imports: [ProductCard],
  styleUrls: ['./product-list.scss']
})
export class ProductList {

  products = input.required<Array<product>>();
  public inStockProduct() :number{
    return this.products().filter(product => product.inStock).length;
  }
  public getProductNumber():number{
    return this.products().length;
  }

}
