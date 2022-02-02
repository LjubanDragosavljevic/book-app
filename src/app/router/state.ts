import { HomePageComponent } from '../home-page/home-page.component';

import { BooksComponent } from '../books/books.component';

import { MoreInfoComponent } from '../books/book/more-info/more-info.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const homeState: Ng2StateDeclaration = {
  name: 'home',
  url: '/home',
  component: HomePageComponent,
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
      type: 'int',
    },
    obj: {
      type: null,
    },
  },
};
