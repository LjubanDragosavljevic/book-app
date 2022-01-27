import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, PARAMS } from './books-config/books.config';
import { GetBooksResponse } from './books-model/books.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private readonly http: HttpClient) {}

  public getBooks(): Observable<GetBooksResponse> {
    return this.http.get<GetBooksResponse>(API_URL, PARAMS);
  }
}
