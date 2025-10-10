import { Component, signal } from '@angular/core';
import {ResolveEnd, ResolveStart, Router, RouterOutlet} from '@angular/router';
import {ProductCard} from './features/products/components/product-card/product-card';
import {Header} from './core/components/header/header';
import {Footer} from './core/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  loading = signal(false);
  protected readonly title = signal('e-shop-gunpla');

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof ResolveStart) this.loading.set(true);
      if (event instanceof ResolveEnd) this.loading.set(false);
    });
  }

}
