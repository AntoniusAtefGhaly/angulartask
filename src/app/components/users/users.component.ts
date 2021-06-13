import { Component, OnInit } from '@angular/core';
import { LabService } from 'src/app/Services/lab.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  users:any;
 
  constructor(private myserves:LabService) { }

  ngOnInit(): void {
//    console.log(this.myserves.getAllUsers());
 
this.myserves.getAllUsers().subscribe(
  res=>{this.users=res.body,console.log(this.users)},
  err =>{console.log(err)}
)
}
Delete(id:any){
  this.myserves.DeleteUser(id);
  console.log("deleted"+id);
}
}