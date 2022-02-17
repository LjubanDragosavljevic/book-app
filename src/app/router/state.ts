import { HomeComponent } from '../home/home.component';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { BooksComponent } from '../books/books.component';

export const homeState: Ng2StateDeclaration = {
  name: 'home',
  url: '/home',
  component: HomeComponent,
};

export const booksState: Ng2StateDeclaration = {
  name: 'books',
  url: '/books',
  component: BooksComponent,
};
