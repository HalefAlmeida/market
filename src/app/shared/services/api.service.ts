import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  readonly API_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public readAll(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(this.API_URL + endpoint).pipe(take(1)); //Faz a requisição ao Back-end uma única vez, desde que não tenha sido alterado o valor
  }
}
