import {Component, inject} from '@angular/core';
import {CartSummary} from '../components/cart-summary/cart-summary';
import {CartStore} from '../services/cart.store';

@Component({
  selector: 'app-cart.page',
  imports: [
    CartSummary
  ],
  template: `
    <app-cart-summary></app-cart-summary>
    <button (click)="clearCart()">clear cart</button>
  `,
  styles: ``
})
export default class CartPage {
  private productStore = inject(CartStore);

  clearCart(): void {
    this.productStore.clearCart();
  }
}
