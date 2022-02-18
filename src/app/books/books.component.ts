import { Component, OnInit, SimpleChanges } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './books-model/book.model';
import { GetBooksResponse } from './books-model/books.model';

import { UIRouterGlobals } from '@uirouter/angular';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  public showCards: boolean = true;
  public showTable: boolean = true;
  public showLocalTable: boolean = true;
  public stateUrl: string;
  public books: Book[];
  public searchText: string;
  constructor(
    private booksService: BooksService,

    private stateService: UIRouterGlobals
  ) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((result: GetBooksResponse) => {
      this.books = result.results.books;
    });
    this.stateUrl = this.stateService.current.url;
    this.checkCards();
    this.checkTable();
    this.checkLocalTable();
  }
  checkCards() {
    this.showCards = this.stateUrl === '/book-card';
  }

  checkTable() {
    this.showTable = this.stateUrl === '/book-table';
  }

  checkLocalTable() {
    this.showLocalTable = this.stateUrl === '/book-local-table';
  }
}
