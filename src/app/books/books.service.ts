import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Book } from './book/book.model';

const API_URL =
  'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';
const API_KEY = 'dVh2I4dlVdJYaXYaOFYtHhkGYISksZFo';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private readonly http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http
      .get<{ results: { books: Book[] } }>(API_URL, {
        params: { 'api-key': API_KEY },
      })
      .pipe(
        map(({ results }) => results.books),
        // add delay to simulate slower network
        delay(2000)
      );
  }
}
