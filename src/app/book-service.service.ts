import { Injectable } from '@angular/core';
import { bookPrice,BookInterface } from './book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  bookprice:bookPrice={
    history:10,
    adventure:20,
    social:30
  }
  public BookContainer:BookInterface[]=[]

  BookAdder(Book:BookInterface){
    let price=this.bookprice[Book.journal]
    Book.Price=price
    this.BookContainer.push(Book)
    console.log(this.BookContainer)
  }
  getBookDetails(){
    return this.BookContainer
  }
  checkValid(name:string):string|boolean|any{
    if(isNaN(parseInt(name))) {
      return name.toLowerCase()
    }
    else{
      return false
    }

  }

 
}
