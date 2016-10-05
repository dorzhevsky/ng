import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { SharedModule } from "./shared/shared.module";
import { UsersModule } from "./users/users.module";

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, UsersModule ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }