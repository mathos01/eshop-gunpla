import {Component, inject, signal} from '@angular/core';
import {CartStore} from '../../services/cart.store';
import {Product} from '../../../products/models/product.model';
import {RouterLink} from '@angular/router';
import {CartFacade} from '../../services/cart.facade';

@Component({
  selector: 'app-cart-summary',
  imports: [
    RouterLink
  ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss'
})
export class CartSummary {

  private cartSummary= inject(CartStore);
  private cartFacade = inject(CartFacade);

  price = this.cartSummary.CartTotal;

  cart = this.cartSummary.Cart;
  cartCount = this.cartSummary.CartCount;

  removeCart(product: Product) {
    this.cartFacade.RemoveFromCart(product);
  }
}
