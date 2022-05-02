import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book.model';
import { BOOKS } from 'src/app/models/mock-data';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {
  isCardView = true;
  books: IBook[] = BOOKS;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCardView(value:boolean){
    if(value === true){
      this.isCardView= true;
    } else {
      this.isCardView = false;
    }
  }
  
  deleteBook(bookId: string) {
    this.books = this.books.filter(book => book.id !== bookId);
  }

}
