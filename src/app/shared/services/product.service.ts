import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly API_ENDPOINT: string = '/products';
  constructor(private api: ApiService<Product>) {}

  public readAll(): Observable<Product[]> {
    return this.api.readAll(this.API_ENDPOINT);
  }
}
