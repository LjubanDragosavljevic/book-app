import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../books-model/book.model';
import { BooksService } from '../books.service';
import { GetBooksResponse } from '../books-model/books.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public books: Book[];

  public displayedColumns: string[] = [
    'rank',
    'title',
    'author',
    'description',
  ];
  public dataSource;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((result: GetBooksResponse) => {
      this.books = result.results.books;
      this.dataSource = new MatTableDataSource<Book>(this.books);
    });
  }
}
