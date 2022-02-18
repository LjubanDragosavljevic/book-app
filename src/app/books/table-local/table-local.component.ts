import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../books-model/book.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-local',
  templateUrl: './table-local.component.html',
  styleUrls: ['./table-local.component.scss'],
})
export class TableLocalComponent implements OnInit {
  @Input() books: Book[];
  public displayedColumns: string[] = [
    'rank',
    'title',
    'author',
    'description',
  ];
  public dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Book>(this.books);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
