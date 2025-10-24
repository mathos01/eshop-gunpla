import { Component, signal } from '@angular/core';
import {ResolveEnd, ResolveStart, Router, RouterOutlet} from '@angular/router';
import {Header} from './core/components/header/header';
import {Footer} from './core/components/footer/footer';
import {BannerError} from './shared/components/banner-error/banner-error';
import {GlobalLoading} from './core/components/global-loading/global-loading';
import {BannerNotify} from './shared/components/banner-notify/banner-notify';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, BannerError, GlobalLoading, BannerNotify],
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
