import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public addFlag:boolean=false
  public searchFlag:boolean=false
  public homeFlag:boolean=true

  add(){
    this.addFlag = true;
    this.searchFlag=false;
    this.homeFlag=false
  }
  search(){
    this.addFlag=false
    this.searchFlag=true
    this.homeFlag=false
  }
home(){
  this.homeFlag=true
  this.addFlag=false
  this.searchFlag=false
}
}
