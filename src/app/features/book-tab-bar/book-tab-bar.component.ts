import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-book-tab-bar',
  templateUrl: './book-tab-bar.component.html',
  styleUrls: ['./book-tab-bar.component.scss']
})
export class BookTabBarComponent implements OnInit {
  @Input() actualView = true;
  @Output() toggleCardView = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

}
