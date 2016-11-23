import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { User, Role } from "./user";
import { UsersService } from "./users.service";
import { Generator } from "../shared/generator";

var _ = require('lodash');

@Component({
   selector:"usersList",
   templateUrl: "javascripts/app/users/usersList.html"
})
export class UsersListComponent implements OnInit
{
    public users: Array<User>;
    public selectedUser:User;
    @Output() public userSelected: EventEmitter<User> = new EventEmitter<User>();

    constructor(private usersService:UsersService)
    {
    }

    public ngOnInit()
    {
        this.users = this.usersService.getUsers(); 
        this.createUser();
    }

    public selectUser(user: User): void {
        this.selectedUser = user;
        this.userSelected.emit(user);
    }

    public createUser()
    {
        let emptyUser: User = this.usersService.getEmptyUser();
        this.selectedUser = emptyUser;
        this.userSelected.emit(emptyUser);        
    }

    public save(user: User)
    {
        this.users.push(user);
        this.selectedUser = user;
    }

    public deleteUser(user: User)
    {
        console.log("Deleting user");
        let index:number = _.findIndex(this.users, e => e.Id === user.Id );
        if (index >= 0)
        {
            this.users.splice(index,1);
            this.createUser();
        }
    }
}