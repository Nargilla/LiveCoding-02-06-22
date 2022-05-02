import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-list-view',
  templateUrl: './book-list-view.component.html',
  styleUrls: ['./book-list-view.component.scss']
})
export class BookListViewComponent implements OnInit {
  @Input() books!: IBook[];
  @Output() deleteBook = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

}
