import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../books-model/book.model';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  isbn: string;

  constructor(private $state: StateService) {}

  ngOnInit(): void {}

  onClick() {
    this.isbn = this.book.primary_isbn10;
    this.$state.go('books/more-info', {
      id: this.isbn,
      obj: this.book,
    });
    window.scrollTo(0, 0);
  }
}
