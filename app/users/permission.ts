export interface IPermission
{
    Name:string;
    Value: number;
    IsGroup: boolean;
    Permissions:Array<IPermission>
}

export class Permission implements IPermission
{
    constructor(private name: string, private value: number)
    {

    }

    public get Value()
    {
        return this.value;
    }

    public get Name()
    {
        return this.name;
    }

    public get Permissions():IPermission[] {
        return [];
    }

    public get IsGroup()
    {
        return false;
    }
}

export class PermissionGroup extends Permission implements IPermission {

    private permissions: Array<IPermission>;

    constructor(name: string, permissions:Array<IPermission>)
    {
        super(name,0);
        this.permissions = permissions;
    }

    public get Permissions()
    {
        return this.permissions;
    }

    public get IsGroup()
    {
        return true;
    }

    public get Value()
    {
        let val: number = 0;
        this.permissions.forEach(p => 
        {
            val |= p.Value;
        });
        return val;
    }
}