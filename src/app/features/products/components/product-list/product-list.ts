import {Component, input} from '@angular/core';
import type { Product } from '../../models/product.model';
import {ProductCard} from '../product-card/product-card';
import {Review} from '../../models/Review.model';
// product-list.ts
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  imports: [ProductCard],
  styleUrls: ['./product-list.scss']
})
export class ProductList {
  products = input.required<Array<Product>>();

  cartItems: Array<Product> = [];
  favoriteIds: Array<number> = [];
  reviews: Array<Review> = [];

  onProductAddedToCart(product: Product) {
  this.cartItems.push(product);
  }

  onProductAddedToFavorite(product: Product) {
    this.favoriteIds.push(product.id);
  }
  onProductRemovedFromFavorites(product: Product) {
    this.favoriteIds = this.favoriteIds.filter(id => id !== product.id);
  }
  isInFavorite(productId:number):boolean {
    return this.favoriteIds.includes(productId);
  }
  onReviewAdded(review: Review) {
    this.reviews.push(review);

  }
  calculateMediumOfRatingReview(id:number):number{
    let reviewMedium: number = 0;
    const reviewM:Array<Review> = this.reviews.filter(review => review.ProductId == id);
    reviewM.forEach(r => {
      reviewMedium += r.rating;
    });
    if(reviewMedium != 0){
      reviewMedium = reviewMedium / reviewM.length;
    }
    return reviewMedium;
  }



  public inStockProduct() :number{
    return this.products().filter(product => product.inStock).length;
  }
  public getProductNumber():number{
    return this.products().length;
  }

}
