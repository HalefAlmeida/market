import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Category } from '../models/category';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  readonly API_ENDPOINT: string = '/categories';
  constructor(private api: ApiService<Category>) {}

  public readAll(): Observable<Category[]> {
    return this.api.readAll(this.API_ENDPOINT);
  }

  public save(record: Category) {
    this.api.save(this.API_ENDPOINT, record);
  }
}
