import { Injectable } from "@angular/core";
import { User, Role } from "./user";
import { Generator } from "../shared/generator";

@Injectable()
export class UsersService
{
    private roles: Role[];
    private users: User[];
    private adminRole: Role;
    private hrRole: Role;

    constructor()
    {
        this.adminRole = new Role(1, "Administrator",1);
        this.hrRole = new Role(2, "HR",2);

        this.roles = 
        [
            this.adminRole,
            this.hrRole
        ];        

        this.users = [
            new User(Generator.Next(), "dorzhevsky", "qwerty", "Dmitry", "Orzhevsky", this.adminRole),
            new User(Generator.Next(), "ashkarin", "qwerty", "Anton", "Shkarin", this.adminRole),
            new User(Generator.Next(), "esokolova", "qwerty", "Elena", "Sokolova", this.hrRole),
            new User(Generator.Next(), "dbashkalin", "qwerty", "Dmitry", "Bashkalin", this.hrRole),
            new User(Generator.Next(), "adegtev", "qwerty", "Alex", "Degtev", this.hrRole)
        ]         
    }

    public getUsers():User[]
    {
        return this.users;
    }

    public getRoles():Role[]
    {
        return this.roles;
    }

    public getEmptyUser(): User
    {
        return new User(0,"","", "", "", this.adminRole);
    }
}