import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './books-model/book.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(books: Book[], searchText: string) {
    if (!books) {
      return [];
    }
    if (!searchText) {
      return books;
    }
    searchText = searchText.toLocaleLowerCase();

    return books.filter((book) => {
      return book.title.toLocaleLowerCase().includes(searchText);
    });
  }
}
