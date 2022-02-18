import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private $state: StateService) {}

  ngOnInit(): void {}
  onCardClick() {
    this.$state.go('books.book-card', {}, { reload: true });
    window.scrollTo(0, 0);
  }

  onBooktableClick() {
    this.$state.go('books.book-table', {}, { reload: true });
    window.scrollTo(0, 0);
  }

  onBooklocalTableClick() {
    this.$state.go('books.book-local-table', {}, { reload: true });
    window.scrollTo(0, 0);
  }
}
