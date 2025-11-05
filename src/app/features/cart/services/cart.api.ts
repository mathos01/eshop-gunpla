import { Injectable } from '@angular/core';
import {BaseApi} from '../../../shared/services/base.api';
import { Product} from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartApi extends BaseApi {
  private readonly endpoint = "cart.json";


  async setProducts(product: Product)  {
    console.log (product.name + " produit ajouté");
     //await this.post<Product>(this.endpoint, product);
    return product;
  }
  async removeFromCart(product: Product): Promise<Product> {
    console.log (product.name + " removeFromCart");
    return product;
  }
  async clearFromCart(): Promise<void> {
    console.log ("clearFromCart()");
  }
}
