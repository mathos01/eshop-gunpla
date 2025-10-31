import {cartRules} from '../../app/features/cart/domain/cart.rules';
import {Product} from '../../app/features/products/models/product.model';
import {CartStore} from '../../app/features/cart/services/cart.store';
import {inject} from '@angular/core';

describe('Cart Rules', () => {
  let cart :CartStore;
  let product :Product;
  beforeEach(() => {
    cart = new CartStore;
    product = {
      id: 1,
      name: 'Potion',
      description: 'yolo',
      imageUrl:'j en ai aucune idée',
      category: 'gaming',
      rating:5,
      price: 100,
      stock: 3,
      inStock: true
    };
  });

  //ADD
  it('should throw if product has no id',() => {
    const invalid = {...product, id: -1 };
    expect(() => { cartRules.ValidateAdd(invalid, cart)}).toThrow();
  });
  it('should throw if quantity is zero',() =>{
    const invalid = {...product, stock: 0};
    expect(() => { cartRules.ValidateAdd(invalid, cart)}).toThrow();
  });
  it('should not allow adding more than stock',()=>{
    const invalid = {...product, stock: 3};
    cart.addCart(invalid);
    cart.addCart(invalid);
    cart.addCart(invalid);
    expect(() => { cartRules.ValidateAdd(invalid, cart)}).toThrow();
  });
  it('should throw if price is negative',() =>{
    const invalid = {...product, price: -1};
    expect(() => { cartRules.ValidateAdd(invalid, cart)}).toThrow();

  });
  it('should not exceed max cart total',() => {
    cart.addCart(product);
    const invalid = {...product, price: 4901};
    expect(() => { cartRules.ValidateAdd(invalid, cart)}).toThrow();
  });

  it('should allow adding product when valid', () =>{
    expect(() => {cartRules.ValidateAdd(product,cart)}).toBeTruthy();
  });

  //Remove
  it('should throw when removing non-existing product', () => {
    const invalid = {...product, id: -1};
    expect(() => {cartRules.ValidateRemove(invalid, cart)}).toThrow();
  });

  it('should remove product when existing', () => {
    cart.addCart(product);
    expect(() => {cartRules.ValidateRemove(product, cart)}).toBeTruthy();
  });

  //clear
  it('should empty cart when clear is called',() => {
    cart.addCart(product);
    cart.clearCart();
    console.log(cart.Cart().length);
    expect(() => {cart.Cart()}).toHaveSize(0);
  });

  it('should not fail when cart is already empty',()=> {
    expect(() => {cartRules.ValidateClear(cart)}).toBeTruthy();
  });

})
