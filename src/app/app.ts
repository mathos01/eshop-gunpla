import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductCard} from './features/products/components/product-card/product-card';
import {Header} from './core/components/header/header';
import {Footer} from './core/components/footer/footer';
import {ProductList} from './features/products/components/product-list/product-list';
import {ImageGallery} from './features/products/components/image-gallery/image-gallery';
import {SearchForm} from './features/products/components/search-form/search-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ProductList, ImageGallery, SearchForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('e-shop-gunpla');
}
