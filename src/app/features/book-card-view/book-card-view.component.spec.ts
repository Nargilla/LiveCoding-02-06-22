import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardViewComponent } from './book-card-view.component';

describe('BookCardViewComponent', () => {
  let component: BookCardViewComponent;
  let fixture: ComponentFixture<BookCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCardViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
