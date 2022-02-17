import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksModule } from './books/books.module';
import { HomeComponent } from './home/home.component';

import { UIRouterModule } from '@uirouter/angular';
import { homeState, booksState } from './router/state';
import { uiRouterConfigFn } from './router/router.config';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavComponent } from './nav/nav.component';

const MATERIAL_MODULES = [
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    BooksModule,
    UIRouterModule.forRoot({
      states: [homeState, booksState],
      useHash: true,
      config: uiRouterConfigFn,
    }),

    MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
