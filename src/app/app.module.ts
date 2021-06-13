import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { UsersComponent } from './components/users/users.component';
import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes:Routes=[
  {path:"",redirectTo:"users",pathMatch:"full"},
  {path:"users",component:UsersComponent},
  {path:"adduser",component:AddUserComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }