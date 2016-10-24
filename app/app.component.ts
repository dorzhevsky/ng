import { Component,ViewChild } from '@angular/core';
import { UsersListComponent } from "./users/usersList";
import { UserHeaderComponent } from "./users/userHeader";
import { User } from "./users/user";

@Component({
  selector: 'app',  
  templateUrl: "app.html"
})
export class AppComponent {
  constructor() {      
  }
}
