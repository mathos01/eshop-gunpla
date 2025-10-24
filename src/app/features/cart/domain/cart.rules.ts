import {Product} from '../../products/models/product.model';
import {CartStore} from '../services/cart.store';
export class cartRules {

  static ValidateAdd(productData: Product, cartTotal: CartStore):void {
    if (productData.id == null) throw new Error("ID is required");
    if (productData.price <= 0) throw new Error("Price is required");
    if (cartTotal.CartTotal() + productData.price >= 5000) throw new Error("the cart is over priced");
  }
  static ValidateRemove(productData: Product, cart: CartStore):void {
    if (cart.Cart().find(value => value.name == productData.name) != productData) throw new Error("the product doesn't exist");
  }
 
  static ValidateUpdate(productData: Product, cart: CartStore):void {

  }

  static ValidateClear(cart: CartStore):void {
    if (cart.Cart() == null) throw new Error("cart is empty");
  }

  static ValidateCheckout(productData: Product, cart: CartStore):void {
    this.ValidateClear(cart);
    this.ValidateAdd(productData, cart);
  }

}
