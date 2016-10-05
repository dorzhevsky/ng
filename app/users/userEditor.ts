import { 
    Component, 
    EventEmitter, 
    Output, 
    Input, 
    Directive,
    ViewContainerRef, 
    ComponentFactoryResolver,
    OnChanges, 
    ComponentRef,
    ElementRef,
    HostListener,
    ReflectiveInjector,
    OnInit,
    SimpleChanges
} from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
    AbstractControl,
    FormsModule,
    ReactiveFormsModule
 } from '@angular/forms';

import { SharedModule } from "../shared/shared.module";
import { User, Role } from "./user";
import { Generator } from "../shared/generator";
import { IPermission, Permission, PermissionGroup } from "./permission";
import { TreeNode } from "./treeNode.class";
import 'jquery';
import * as _ from "lodash";
//declare var $:JQueryStatic;

@Component({
   selector:"userEditor",
   templateUrl: "./app/users/userEditor.html"
})
export class UserEditorComponent
{
    public permissionsTree: Array<TreeNode<Permission>>;
    public user: User;

    @Output() 
    public userSaved: EventEmitter<User> = new EventEmitter<User>()

    @Output() 
    public userDeleted: EventEmitter<User> = new EventEmitter<User>();

    public roles: Array<Role>;

    public form: FormGroup;

    private messages: any;
    
    public login = new FormControl("", Validators.required); 
    public password = new FormControl("", Validators.required);
    public firstName = new FormControl("", Validators.required);
    public lastName = new FormControl("", Validators.required);
    public role = new FormControl("", Validators.required);

    constructor(private formBuilder: FormBuilder)
    {
        this.form = this.formBuilder.group({
            "login": this.login,
            "password": this.password,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "role": this.role
        });

        this.messages = 
        {
            required:'Необходимо задать значение'
        };

        this.roles = 
        [
            new Role(1, "Administrator",1),
            new Role(2, "HR",2),
            new Role(3, "Offices",4)
        ];

        this.permissionsTree = 
        [
            new TreeNode(new Permission("Programming", 0),
            [
                new TreeNode(new Permission("C#", 1), null),
                new TreeNode(new Permission("Python", 2), null),
                new TreeNode(new Permission("JavaScript", 4), null)
            ])
        ]

        var that = this;
        this.role.valueChanges.subscribe(function()
        {
            console.log(that.role.value);
            that.resetPermissionsTree(that.permissionsTree);
            that.updatePermissionsTree(that.permissionsTree);            
        });
    }

    @Input() public set selectedUser(user: User)
    {
        this.user = user;

        this.login.reset();
        this.login.setValue(user.Login);

        this.password.setValue(user.Password);
        this.firstName.setValue(user.FirstName);
        this.lastName.setValue(user.LastName);
        this.role.setValue(user.Role);

        // this.resetPermissionsTree(this.permissionsTree);
        // this.updatePermissionsTree(this.permissionsTree);
    } 

    private updatePermissionsTree(permissions: Array<TreeNode<Permission>>)
    {
        _.each(permissions, e =>
        {
            let permission = e.Value;
            // console.log("Permission mask");
            // console.log(this.role.value.PermissionsMask);
            if (permission.Value & this.role.value.PermissionsMask)
            {
                e.Check(true);
            }
            if (e.Children && e.Children.length > 0)
            {
                this.updatePermissionsTree(e.Children);
            }
        });
    }

    private resetPermissionsTree(permissions: Array<TreeNode<Permission>>)
    {
        _.each(permissions, e =>
        {
            e.Checked = false;
            e.Indeterminate = false;
            if (e.Children && e.Children.length > 0)
            {
                this.resetPermissionsTree(e.Children);
            }
        });
    }


    public onChange(role: Role)
    {
        // this.user.Role = role;
        // console.log("onChnage");
        // console.log(role.Name);
    }

    public saveUser()
    {
        if (this.form.valid)
        {
            if (this.user)
            {
                this.user.Login = this.login.value;
                this.user.Password = this.password.value;
                this.user.FirstName = this.firstName.value;
                this.user.LastName = this.lastName.value;
                this.user.Role = this.role.value;

                if (this.user.Id === 0)
                {
                    this.user.Id = Generator.Next();
                    this.userSaved.emit(this.user);
                }
            }
        }
    }

    public deleteUser()
    {
        this.userDeleted.emit(this.user);
    }
}


