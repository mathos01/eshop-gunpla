import {Component, inject, signal} from '@angular/core';
import {CartStore} from '../../services/cart.store';
import {Product} from '../../models/product.model';
import {RouterLink} from '@angular/router';

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
  price = this.cartSummary.CartTotal;

  cart = this.cartSummary.Cart;
  cartCount = this.cartSummary.CartCount;

  removeCart(product: Product) {
    this.cartSummary.removeCart(product);
  }
}
