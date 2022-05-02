import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookContainerComponent } from './features/book-container/book-container.component';
import { BookTabBarComponent } from './features/book-tab-bar/book-tab-bar.component';
import { BookCardViewComponent } from './features/book-card-view/book-card-view.component';
import { BookListViewComponent } from './features/book-list-view/book-list-view.component';
import { BookAddFormComponent } from './features/book-add-form/book-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookContainerComponent,
    BookTabBarComponent,
    BookCardViewComponent,
    BookListViewComponent,
    BookAddFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
