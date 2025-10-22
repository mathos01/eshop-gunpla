import { Injectable } from '@angular/core';
import { BaseApi } from '../../../shared/services/base.api';
import {Product} from '../models/product.model';

@Injectable({providedIn: 'root'})

export class ProductApi extends BaseApi {
  private readonly endpoint = "http://localhost:4200/products.json";

  async getAll(): Promise<Product[]> {
    return this.get<Product[]>(this.endpoint);
  }
  async getProductById(id: string): Promise<Product> {
    const products = this.get<Product[]>(this.endpoint);
    const product = products.then(product => product.find(product => product.id === Number(id)));
    return product.then(product => product as Product);
    //return this.get<Product>(`${this.endpoint}/${id}`);
  }
}
