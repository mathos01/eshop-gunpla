import { ResolveFn } from '@angular/router';
import {Product} from '../../features/products/models/product.model';
import {inject} from '@angular/core';
import {ProductApi} from '../../features/products/services/product.api';

export const productListResolver: ResolveFn<Array<Product>> = (route, state) => {
  const productApi = inject(ProductApi);
  return productApi.getAll();
};
