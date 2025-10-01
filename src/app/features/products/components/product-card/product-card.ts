import { Component } from '@angular/core';
import {Counter} from '../counter/counter';

// product-card.ts
@Component({ // ← Décorateur
  selector: 'app-product-card', // ← pour l'appeler
  imports: [
    Counter
  ], // ← pour importer les outils utiles au composant
  templateUrl: './product-card.html', // ← lien vers son template
  styleUrls: ['./product-card.scss'] // ← lien vers son style
})
export class ProductCard {
  title = 'MacBook Pro'; // propriété
  price = 2299; // propriété
  inStock = true; // propriété

  /*discount = 0.1; // 10% de réduction
  features = ['Écran Retina', 'M1 Pro', '16 Go RAM'];

  getDiscountPrice(): number {
    return this.price * (1 - this.discount);
  }
*/
    onBuyClick() { // méthode
    if (this.inStock) {
      console.log(`${this.title} ajouté au panier !`);
    }
  }
}
