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
    this.$state.go('book-card');
    window.scrollTo(0, 0);
  }

  onBooktableClick() {
    this.$state.go('book-table');
    window.scrollTo(0, 0);
  }

  onBooklocalTableClick() {
    this.$state.go('book-local-table');
    window.scrollTo(0, 0);
  }
}
