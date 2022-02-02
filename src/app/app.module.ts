import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BooksModule } from './books/books.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { UIRouterModule } from '@uirouter/angular';
import { homeState, booksState, moreInfoState } from './router/state';
import { uiRouterConfigFn } from './router/router.config';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatMenuModule, MatButtonModule];

@NgModule({
  declarations: [AppComponent, HomePageComponent, NavComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BooksModule,
    UIRouterModule.forRoot({
      states: [homeState, booksState, moreInfoState],
      useHash: true,
      config: uiRouterConfigFn,
    }),
    MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
