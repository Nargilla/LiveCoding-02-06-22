import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTabBarComponent } from './book-tab-bar.component';

describe('BookTabBarComponent', () => {
  let component: BookTabBarComponent;
  let fixture: ComponentFixture<BookTabBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTabBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
