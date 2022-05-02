import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-card-view',
  templateUrl: './book-card-view.component.html',
  styleUrls: ['./book-card-view.component.scss']
})
export class BookCardViewComponent implements OnInit {
  @Input() book!: IBook;
  @Output() deleteBook = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
