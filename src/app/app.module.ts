import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookAddComponent } from './book-add/book-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBookComponent } from './search-book/search-book.component';
import { BookServiceService } from './book-service.service';

@NgModule({
  declarations: [
    AppComponent,
    BookAddComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
