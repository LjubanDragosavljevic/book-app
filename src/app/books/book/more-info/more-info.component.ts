import { Component, OnInit } from '@angular/core';
import { Book, BuyLinks } from '../../books-model/book.model';
import { UIRouterGlobals } from '@uirouter/angular';
import { BooksService } from '../../books.service';
import { GetBooksResponse } from '../../books-model/books.model';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent implements OnInit {
  book: Book | undefined;
  books: Book[] | undefined;
  buyLinks: BuyLinks[] | undefined;
  isbn: number;
  constructor(
    private stateService: UIRouterGlobals,
    private booksService: BooksService,
    private $state: StateService
  ) {
    this.book = this.stateService.params['obj'];
    if (this.stateService.params['obj'] === undefined) {
      this.booksService.getBooks().subscribe((result: GetBooksResponse) => {
        this.books = result.results.books;
        for (this.book of this.books) {
          return this.book;
        }
      });
    }
  }

  ngOnInit(): void {
    this.buyLinks = this.book.buy_links;
  }
  ngAfterViewInit(): void {
    this.buyLinks = this.book.buy_links;
  }
  onClose() {
    this.$state.go('books');
  }
}
