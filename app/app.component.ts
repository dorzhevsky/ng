import { Component,ViewChild } from '@angular/core';
import { UsersListComponent } from "./users/usersList";
import { UserHeaderComponent } from "./users/userHeader";
import { User } from "./users/user";

@Component({
  selector: 'app',  
  templateUrl: "app.html"
})
export class AppComponent {

  public selectedUser: User;
  
  @ViewChild(UsersListComponent)
  public usersList: UsersListComponent;

  constructor() {      
  }

  public onUserSelected(user: User)
  {
     this.selectedUser = user;
  }

  public userSaved(user: User)
  {
     this.usersList.save(user);
  }

  public deleteUser(user: User)
  {
    this.usersList.deleteUser(user);
  }
}
