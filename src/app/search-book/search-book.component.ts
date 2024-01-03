import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { BookInterface } from '../book-interface';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent {
  public display:boolean=false
  public FilteredBook:BookInterface[]=[]
  public BookContainer:BookInterface[]=[]
  constructor(private Bookservice:BookServiceService, private appinstance:AppComponent){}
  searchBook=new FormGroup({
    searchType:new FormControl('', [Validators.required]),
    inputValue:new FormControl('',[Validators.required])
  })
  submit(){
    let searchType:string=this.searchBook.value.searchType?? ''
    console.log(searchType)
    let inputValue:string|boolean=this.Bookservice.checkValid(this.searchBook.value.inputValue?? '')
    console.log(inputValue)
    if(inputValue){
      this.display=true
      this.BookContainer=this.Bookservice.getBookDetails()
      this.searchBook.reset()
      if(searchType==='author'){
        this.FilteredBook=this.BookContainer.filter(item=> item.author===inputValue)
        if(this.FilteredBook.length==0) alert("no such author is found")
      }
      else{
        this.FilteredBook=this.BookContainer.filter(item=>item.bookName===inputValue)
        if(this.FilteredBook.length==0) alert("no such book name is avialable")
      }
    }
    else this.searchBook.reset()
   
  }
  home(){
    this.appinstance.home()
  }


}
