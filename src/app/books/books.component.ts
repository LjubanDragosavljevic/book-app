import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './books-model/book.model';
import { GetBooksResponse } from './books-model/books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public books: Book[];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((result: GetBooksResponse) => {
      this.books = result.results.books;
      console.log(this.books);
    });
    console.log;
  }
}
