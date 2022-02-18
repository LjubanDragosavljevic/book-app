import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../books-model/book.model';
import { BooksService } from '../books.service';
import { GetBooksResponse } from '../books-model/books.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((result: GetBooksResponse) => {
      this.books = result.results.books;
      this.dataSource = new MatTableDataSource<Book>(this.books);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
