import {inject, Injectable} from '@angular/core';
import {CartStore} from './cart.store';
import {cartRules} from '../domain/cart.rules';
import {Product} from '../../products/models/product.model';
import {Notification} from '../../../shared/services/notification';
import {CartApi} from './cart.api';

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  private cartStore = inject(CartStore);
  private cartApi = inject(CartApi);
  private notification = inject(Notification);

  async AddToCart(productData: Product): Promise<Product> {
    // step 1
    cartRules.ValidateAdd(productData,this.cartStore);
    // step 2 api
    const product = await this.cartApi.setProducts(productData);
    // step 3 cache
    this.cartStore.addCart(product);
    //step 4 notification
    this.notification.showSuccess("produit added successfully.");

    return product;
  }

  async RemoveFromCart(productData: Product): Promise<Product> {
    //step 1
    cartRules.ValidateRemove(productData,this.cartStore);
    //step 2
    const product = await this.cartApi.removeFromCart(productData);

    //step 3
    this.cartStore.removeCart(product);
    //step 4
    this.notification.showSuccess("produit removed successfully.");

    return product;
  }

  async ClearFromCart(): Promise<void> {
    cartRules.ValidateClear(this.cartStore);

    await this.cartApi.clearFromCart();

    this.cartStore.clearCart();

    this.notification.showSuccess("clear cart successfully.");
  }

}
