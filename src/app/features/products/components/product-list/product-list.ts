import { Component } from '@angular/core';
import type { product } from '../../../../models/product.model';
import {ProductCard} from '../product-card/product-card';
import {CurrencyPipe, NgStyle} from '@angular/common';
// product-list.ts
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  imports: [
    CurrencyPipe,
    NgStyle
  ],
  styleUrls: ['./product-list.scss']
})
export class ProductList {

  public inStockProduct() :number{
    return this.products.filter(product => product.inStock).length;
  }
  public getProductNumber():number{
    return this.products.length;
  }

  products: product[] = [
  {
    id: 1,
    name: 'Bandai gunpla: MG RX 78-2',
    description: 'maquette de la franchise gundam sur le célèbre modèle RX 78-2 dans sa version master grade',
    price: 49.99,
    imageUrl: 'https://placehold.co/300x200/8B0000/ffffff?text=RX78-2',
    category: 'gaming',
    inStock: true,
    rating: 4.9
  },
  {
    id: 2,
    name: 'T-shirt goldorak 1975',
    description: 'T-shirt du célèbre robot Goldorak en collaboration avec la marque uniqlo',
    price: 19.99,
    imageUrl: 'https://placehold.co/300x200/FF6347/ffffff?text=uniqlo',
    category: 'clothing',
    inStock: false,
    rating: 4.5
  },
  {
    id: 3,
    name: 'Cuisinart Coffee Maker',
    description: 'Cafetière programmable 12 tasses avec carafe en verre',
    price: 89.99,
    imageUrl: 'https://placehold.co/300x200/4682B4/ffffff?text=Coffee',
    category: 'home',
    inStock: false,
    rating: 4.2
  },
  {
  id: 4,
  name: 'Canon EOS R50',
  description: 'Appareil photo hybride 24MP avec objectif kit 18-45mm',
  price: 679.99,
  imageUrl: 'https://placehold.co/300x200/2F4F4F/ffffff?text=Canon',
  category: 'electronics',
  inStock: true,
  rating: 4.7
  },
  {
  id: 5,
  name: 'Yoga Mat Premium',
  description: 'Tapis de yoga antidérapant 6mm épaisseur, écologique',
  price: 45.50,
  imageUrl: 'https://placehold.co/300x200/9370DB/ffffff?text=Yoga',
  category: 'sports',
  inStock: false,
  rating: 4.3
  }
  ];
}
