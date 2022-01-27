import { Book } from './book.model';

export interface Results {
  books: Book[];
}

export interface GetBooksResponse {
  results: Results;
}
