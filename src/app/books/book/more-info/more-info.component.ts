import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../books-model/book.model';
import { UIRouterGlobals } from '@uirouter/angular';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent implements OnInit {
  book: Book | undefined;

  constructor(private stateService: UIRouterGlobals) {
    this.book = this.stateService.params['obj'];

    console.log(this.book);
  }

  ngOnInit(): void {}
}
