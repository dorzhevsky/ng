import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { User, Role } from "./user";
import { Generator } from "../shared/generator";
import * as _ from 'lodash';

@Component({
   selector:"usersList",
   templateUrl: "./app/users/usersList.html"
})
export class UsersListComponent implements OnInit
{
    public users: Array<User>;
    public selectedUser:User;
    @Output() public userSelected: EventEmitter<User> = new EventEmitter<User>();

    constructor()
    {
        this.users = [
            new User(Generator.Next(), "dorzhevsky", "qwerty", "Dmitry", "Orzhevsky", new Role(1, "Administrator",7)),
            new User(Generator.Next(), "ashkarin", "qwerty", "Anton", "Shkarin", new Role(1, "HR",2)),
            new User(Generator.Next(), "esokolova", "qwerty", "Elena", "Sokolova", new Role(1, "Officer",3)),
            new User(Generator.Next(), "dbashkalin", "qwerty", "Dmitry", "Bashkalin", new Role(1, "Administrator",1)),
            new User(Generator.Next(), "adegtev", "qwerty", "Alex", "Degtev", new Role(1, "HR",2)),
        ] 
    }

    public selectUser(user: User): void {
        this.selectedUser = user;
        this.userSelected.emit(user);
    }

    public createUser()
    {
        let emptyUser: User = User.Empty();
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

    public ngOnInit()
    {
        this.createUser();
    }
}