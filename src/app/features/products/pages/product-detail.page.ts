import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail.page',
  imports: [],
  template: `
    <p>
      L'id du produit est : {{productId}}
    </p>
  `,
  styles: ``
})
export default class ProductDetailPage {
  private route = inject(ActivatedRoute);
  productId = this.route.snapshot.paramMap.get('id');
}
