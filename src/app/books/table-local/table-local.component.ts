import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '../books-model/book.model';

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

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Book>(this.books);
  }
}
