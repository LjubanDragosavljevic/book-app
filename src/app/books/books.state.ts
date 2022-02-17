import { BookComponent } from '../books/book/book.component';
import { TableComponent } from '../books/table/table.component';
import { TableLocalComponent } from '../books/table-local/table-local.component';
import { MoreInfoComponent } from '../books/book/more-info/more-info.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const bookCard: Ng2StateDeclaration = {
  name: 'book-card',
  url: '/books/book-card',
  component: BookComponent,
};

export const bookTable: Ng2StateDeclaration = {
  name: 'book-table',
  url: '/books/book-table',
  component: TableComponent,
};

export const bookLocalTable: Ng2StateDeclaration = {
  name: 'book-local-table',
  url: '/books/book-local-table',
  component: TableLocalComponent,
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
