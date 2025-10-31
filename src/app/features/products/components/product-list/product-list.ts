import {ChangeDetectionStrategy, Component, computed, input, signal} from '@angular/core';
import type {category, Product} from '../../models/product.model';
import {ProductCard} from '../product-card/product-card';
import {Review} from '../../models/Review.model';
import {SearchForm} from '../search-form/search-form';
// product-list.ts
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductCard, SearchForm],
  styleUrls: ['./product-list.scss']
})
export class ProductList {
  products = input.required<Array<Product>>();

  cartItems: Array<Product> = [];
  favoriteIds: Array<number> = [];
  reviews: Array<Review> = [];
  categorySearch = signal("");

  search = computed(() => {
    return this.categorySearch() == '' ? this.products() : this.products().filter((product) => product.category == this.categorySearch());
  })


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
  public searchFromCategory(categoryChosen:category){
    this.categorySearch.set(categoryChosen);
  }

}
