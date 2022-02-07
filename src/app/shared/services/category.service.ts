import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  readonly API_URL: string = 'http://localhost:3000/category';
  constructor(private http: HttpClient) {}

  public readAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URL).pipe(take(1));
  }
}
