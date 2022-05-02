import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book.model';
import { BOOKS } from 'src/app/models/mock.data';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {
  books: IBook[] = BOOKS;
  changeView: boolean = true;
  showBookModal: boolean = false;
  book!: IBook;
  constructor() { }

  ngOnInit(): void {
  }

  closeModals(): void {
    this.showBookModal = false;
  }

  saveBook(book: IBook): void {
    book.id = Math.random().toString(36).replace('0.', '').substring(2,9);
    this.books.push(book);
    this.closeModals();
  }

  selectView(value: string){
    if(value === 'cardView'){
      this.changeView = true;
    } else {
      this.changeView = false;
    }
  }

  deleteBook(bookID: string){
    this.books = this.books.filter(book => book.id !== bookID)
  }
}
