import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MoreInfoComponent } from './book/more-info/more-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { TableLocalComponent } from './table-local/table-local.component';
import { BrowserModule } from '@angular/platform-browser';
import {
  moreInfoState,
  bookCard,
  bookTable,
  bookLocalTable,
} from '../books/books.state';
import { UIRouterModule } from '@uirouter/angular';
import { uiRouterConfigCh } from '../router/router.config';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

const MATERIAL_MODULES = [
  MatCardModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MATERIAL_MODULES,
    FlexLayoutModule,
    FormsModule,
    BrowserModule,
    UIRouterModule.forChild({
      states: [moreInfoState, bookCard, bookTable, bookLocalTable],

      config: uiRouterConfigCh,
    }),
  ],
  declarations: [
    BooksComponent,
    BookComponent,
    MoreInfoComponent,
    SearchPipe,
    TableComponent,
    TableLocalComponent,
  ],
  exports: [BooksComponent],
})
export class BooksModule {}
