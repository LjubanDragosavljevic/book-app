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
  public book: Book | undefined;
  public books: Book[] | undefined;
  public buyLinks: BuyLinks[] | undefined;
  public isbn: string;
  constructor(
    private stateService: UIRouterGlobals,
    private booksService: BooksService,
    private $state: StateService
  ) {
    this.book = this.stateService.params['obj'];
    this.isbn = this.stateService.params['id'];
    if (this.stateService.params['obj'] === undefined) {
      this.booksService.getBooks().subscribe((result: GetBooksResponse) => {
        this.books = result.results.books;
        this.book = this.books.find(
          (book) => book.primary_isbn10 === this.isbn
        );
      });
    }
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  onClose() {
    this.$state.go('books.book-card');
  }
}
