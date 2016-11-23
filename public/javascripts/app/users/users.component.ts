import { Component,ViewChild } from '@angular/core';
import { UsersListComponent } from "./usersList";
import { UserHeaderComponent } from "./userHeader";
import { User } from "./user";

@Component({
  selector: 'users',  
  templateUrl: "javascripts/app/users/users.html"
})
export class UsersComponent {

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
