import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  readonly books$ = this.booksService.getBooks();

  constructor(private readonly booksService: BooksService) {}

  ngOnInit(): void {}
}
