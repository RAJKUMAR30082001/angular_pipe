import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import {BookInterface, bookPrice} from '../book-interface'
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent {
  public pushFlag:boolean=false
  public type:string=''
  // public BookDetails:BookInterface[]=[]
  constructor (private Service:BookServiceService,private appinstance:AppComponent){}
  public bookDetail= new FormGroup({
    bookName: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    journal: new FormControl('', [Validators.required])
  })
  checkValid(name:string):string|boolean|any{
    if(isNaN(parseInt(name))) {
      return name.toLowerCase()
    }
    else{
      this.pushFlag=true
      return false
    }

  }

  Submit(){
    if(this.bookDetail.valid){
      let bookContainer:BookInterface={
        bookName:this.checkValid(this.bookDetail.get('bookName')?.value ?? " "),
        author:this.checkValid(this.bookDetail.get('author')?.value ?? " "),
        journal:this.checkValid(this.bookDetail.get('journal')?.value ?? " ")
      }
      if(!this.pushFlag){
        
        this.Service.BookAdder(bookContainer)
      }
      else alert("enter correct details")
    }
    this.bookDetail.reset()
  }
  back(){
    this.appinstance.home()
  }
}

