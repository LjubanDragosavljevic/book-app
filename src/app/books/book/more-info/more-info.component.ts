import { Component, OnInit, Input } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { Book } from '../../books-model/book.model';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss'],
})
export class MoreInfoComponent implements OnInit {
  book: Book | undefined;

  constructor(private stateService: StateService) {
    this.book = this.stateService.params['obj'];

    console.log(this.book);
  }

  ngOnInit(): void {}
}
