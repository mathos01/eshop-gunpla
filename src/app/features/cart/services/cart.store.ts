import {computed, Injectable, numberAttribute, signal} from '@angular/core';
import {Product} from '../../products/models/product.model';
import {isDevkitMigration} from '@angular/cdk/schematics';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private CartSignal = signal<Product[]>([]);

  Cart = computed(() => this.CartSignal());
  CartCount = computed(() => this.CartSignal().length);
  CartTotal = computed(() => this.total());


  total(){
    let total:number = 0;

    this.CartSignal().forEach((item) => {
      total += item.price;
    })

    return total;
  }

  setCart(products: Product[]) {
    this.CartSignal.set(products);
  }

  addCart(product: Product) {
    this.CartSignal.update(cart => [...cart, product] );
  }

  updateCart(updated: Product) {
    this.CartSignal.update(cart =>
      cart.map(u => (u.id === updated.id ? updated : u))
    );
  }

  removeAllCart(id: number): void {
    this.CartSignal.update(cart => cart.filter(u => u.id !== id));

  }
  removeCart( product : Product): void {
    const indexCart = this.CartSignal().indexOf(product);
    console.log(indexCart);
    if (indexCart !== -1) {
      this.CartSignal.update(cart => cart.filter((u,index) => index !== indexCart));
    }
  }

  clearCart(): void {
    this.CartSignal.set([]);
  }

}
