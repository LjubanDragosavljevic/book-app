import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books$: any;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books$ = this.booksService
      .getBooks()
      .pipe(map(({ results }) => results.books));
  }
}
