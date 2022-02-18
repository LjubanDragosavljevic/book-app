import { BookComponent } from '../books/book/book.component';
import { TableComponent } from '../books/table/table.component';
import { TableLocalComponent } from '../books/table-local/table-local.component';
import { MoreInfoComponent } from '../books/book/more-info/more-info.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const bookCard: Ng2StateDeclaration = {
  name: 'books.book-card',
  url: '/book-card',
  views: {
    bookCard: {
      component: BookComponent,
    },
  },
};

export const bookTable: Ng2StateDeclaration = {
  name: 'books.book-table',
  url: '/book-table',
  views: {
    bookTable: {
      component: TableComponent,
    },
  },
};

export const bookLocalTable: Ng2StateDeclaration = {
  name: 'books.book-local-table',
  url: '/book-local-table',
  views: {
    bookLocalTable: {
      component: TableLocalComponent,
    },
  },
};
export const moreInfoState: Ng2StateDeclaration = {
  name: 'books/more-info',
  url: '/books/book-card/more-info/:id',
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
