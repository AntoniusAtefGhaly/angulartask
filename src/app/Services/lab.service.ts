import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabService {
  //baseurl="http://antoniusatef-001-site1.btempurl.com/api/users";
  baseurl="/api/users"
  constructor(private myclient:HttpClient) {}
  getAllUsers(){
    return this.myclient.get(this.baseurl,{observe:"response"});
  }
  getUserID(id:any){
    return this.myclient.get(this.baseurl+"/"+id,{observe:"response"});
  }
  AddUser(user:any){
    return this.myclient.post(this.baseurl,user);
  }
  DeleteUser(id:any){
    return this.myclient.delete(this.baseurl+"/"+id);
  }
}
