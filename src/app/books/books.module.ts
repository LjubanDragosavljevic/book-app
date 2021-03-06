import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books.component';
import { FlexLayoutModule } from '@angular/flex-layout';

export const MATERIAL_MODULES = [
  MatCardModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
];

@NgModule({
  imports: [CommonModule, HttpClientModule, MATERIAL_MODULES, FlexLayoutModule],
  declarations: [BooksComponent, BookComponent],
  exports: [BooksComponent],
})
export class BooksModule {}
