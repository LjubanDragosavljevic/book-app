import { HomeComponent } from '../home/home.component';

import { BooksComponent } from '../books/books.component';

import { MoreInfoComponent } from '../books/book/more-info/more-info.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

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

export const moreInfoState: Ng2StateDeclaration = {
  name: 'books/more-info',
  url: '/books/more-info/:id',
  component: MoreInfoComponent,
  params: {
    id: {
      type: 'string',
    },
    obj: {
      type: null,
    },
  },
};
