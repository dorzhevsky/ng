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
    SimpleChanges,
    ViewChild
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
import { TreeComponent } from "./tree.component";
import { UsersService } from "./users.service";
import 'jquery';
import { ValidationService, CustomValidationService  } from "../shared/validation.service";

var _ = require('lodash');

@Component({
    selector:"userEditor",
    templateUrl: "javascripts/app/users/userEditor.html"
})
export class UserEditorComponent implements OnInit
{
    public permissionsTree: Array<TreeNode<Permission>>;
    public user: User;

    @Output() 
    public userSaved: EventEmitter<User> = new EventEmitter<User>()

    @Output() 
    public userDeleted: EventEmitter<User> = new EventEmitter<User>();

    @ViewChild(TreeComponent)
    public rolesTree:TreeComponent;

    public roles: Array<Role>;

    public form: FormGroup;
    
    public login = new FormControl("", Validators.compose([
        Validators.required, CustomValidationService.CheckLogin
    ])); 
    public password = new FormControl("", Validators.compose([
        Validators.required, CustomValidationService.CheckPassword
    ]));

    public firstName = new FormControl("", Validators.compose([
        Validators.required, CustomValidationService.CheckName
    ]));
    public lastName = new FormControl("", Validators.compose([
        Validators.required, CustomValidationService.CheckName
    ]));
    public role = new FormControl("", Validators.required);

    private selectedRole: Role;

    constructor(private formBuilder: FormBuilder, private usersService: UsersService)
    {
        this.form = this.formBuilder.group({
            "login": this.login,
            "password": this.password,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "role": this.role
        });

        this.roles = this.usersService.getRoles();
    }

    public ngOnInit()
    {
        var that = this;
        this.role.valueChanges.subscribe(function()
        {
            that.selectedRole = <Role>that.role.value;
        })
    }

    @Input() public set selectedUser(user: User)
    {
        this.user = user;
        this.selectedRole = this.user.Role;

        this.login.reset();
        this.login.setValue(user.Login);

        //TODO: Reset all form controls
        this.password.setValue(user.Password);        
        this.firstName.setValue(user.FirstName);
        this.lastName.setValue(user.LastName);
        this.role.setValue(user.Role);
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

    private createRole()
    {
        this.selectedRole = new Role(0, "", 0);
    }
}