import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  StudentFromLogin:any;
  stuudentslist :{name:string,age:number}[]=[];


  RecievData(e:any){
    console.log(e)
    this.stuudentslist.push(e);
   this.StudentFromLogin=this.stuudentslist;
  }
}