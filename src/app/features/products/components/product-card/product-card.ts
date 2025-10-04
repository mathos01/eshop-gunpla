import {Component, input} from '@angular/core';
import {product} from '../../models/product.model';
import {CurrencyPipe, NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';

// product-card.ts
@Component({ // ← Décorateur
  selector: 'app-product-card', // ← pour l'appeler
  imports: [
    CurrencyPipe,
    RouterLink,
    NgStyle
  ], // ← pour importer les outils utiles au composant
  templateUrl: './product-card.html', // ← lien vers son template
  styleUrls: ['./product-card.scss'] // ← lien vers son style
})
export class ProductCard {
  productCard = input.required<product>();

    onBuyClick() { // méthode
    if (this.productCard().inStock) {
      console.log(`${this.productCard().name} ajouté au panier !`);
    }
  }
}
