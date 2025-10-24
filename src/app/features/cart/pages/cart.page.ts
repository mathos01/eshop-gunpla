import {Component, inject} from '@angular/core';
import {CartSummary} from '../components/cart-summary/cart-summary';
import {CartFacade} from '../services/cart.facade';

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
  private productStore = inject(CartFacade);

  clearCart(): void {
    this.productStore.ClearFromCart();
  }
}
