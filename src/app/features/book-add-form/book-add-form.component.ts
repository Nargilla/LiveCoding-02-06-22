import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from 'src/app/models/book.model';

@Component({
  selector: 'app-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.scss']
})
export class BookAddFormComponent implements OnInit {
  @Input() book!: IBook;
  @Output() closeBookModal = new EventEmitter<boolean>();
  @Output() savedBook = new EventEmitter<IBook>();
  bookForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    authorName: new FormControl(''),
    authorSurname: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {}

  saveBook(): void {
    this.savedBook.emit(this.bookForm.value);
  }
}
