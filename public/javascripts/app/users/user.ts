export class User
{
    constructor(public Id: number,
                public Login: string,
                public Password: string,
                public FirstName: string,
                public LastName: string,
                public Role: Role)
    {

    }

    public get Name(): string{
        return this.FirstName + " " + this.LastName; 
    }
}

export class Role
{
    constructor(public Id: number, public Name: string, public PermissionsMask: number)
    {

    }
}