import {Component, inject, input, output} from '@angular/core';
import {Product} from '../../models/product.model';
import {CurrencyPipe, DecimalPipe, NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';
import {RatingForm} from '../rating-form/rating-form';
import {Review} from '../../models/Review.model';
import {CartStore} from '../../../cart/services/cart.store';
import {CartFacade} from '../../../cart/services/cart.facade';

// product-card.ts
@Component({ // ← Décorateur
  selector: 'app-product-card', // ← pour l'appeler
  imports: [
    CurrencyPipe,
    RouterLink,
    NgStyle,
    RatingForm,
    DecimalPipe
  ], // ← pour importer les outils utiles au composant
  templateUrl: './product-card.html', // ← lien vers son template
  styleUrls: ['./product-card.scss'] // ← lien vers son style
})
export class ProductCard {
  private productfacade = inject(CartFacade);

  //récupère les infos du produits
  product = input.required<Product>();
  isFavorite = input<boolean>(false);
  ratingMedium=input<number>();
  showRatingForm:boolean = false;

  //mes output qui renvoie des infos au component parent
  productAddedToFavorites = output<Product>();
  productRemoveFromFavorites = output<Product>();
  productReviews = output<Review>();



  //mes méthode
  async onBuyClick() { // méthode
    if (this.product().inStock) {
      await this.productfacade.AddToCart(this.product());
    }
  }

  onToggleFavorite() {
    if (this.isFavorite()) {
      this.productRemoveFromFavorites.emit(this.product());
    }else{
      this.productAddedToFavorites.emit(this.product());
    }
  }
  onToggleRatingForm(){
    if (this.showRatingForm){
      this.showRatingForm = false;
    }else {
      this.showRatingForm = true;
    }
  }
  onReviewSubmitted(review: Review) {
    this.showRatingForm = false;
    this.productReviews.emit(review);
  }


}
