import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-tab-bar',
  templateUrl: './book-tab-bar.component.html',
  styleUrls: ['./book-tab-bar.component.scss']
})
export class BookTabBarComponent implements OnInit {
  @Output() selectView = new EventEmitter<string>()
  @Output() showBookModal = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
}
