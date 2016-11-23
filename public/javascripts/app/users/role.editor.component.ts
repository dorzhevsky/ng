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

var _ = require('lodash');

@Component({
   selector:"roleEditor",
   templateUrl: "javascripts/app/users/role.editor.component.html"
})
export class RoleEditorComponent implements OnInit
{
    private _role: Role;
    private permissionsTree: Array<TreeNode<Permission>>;

    @Input()
    public set role(role: Role)
    {
        if (role)
        {
            this._role = role;
            this.onRoleChanged();
        }
    }

    public roleName = new FormControl("", Validators.required);

    @ViewChild(TreeComponent)
    public rolesTree:TreeComponent;
    
    constructor(private formBuilder: FormBuilder, private usersService: UsersService)
    {
    }

    public ngOnInit()
    {
        this.permissionsTree = 
        [
            new TreeNode(new Permission("Programming", 0),
            [
                new TreeNode(new Permission("C#", 1), null),
                new TreeNode(new Permission("Python", 2), null),
                new TreeNode(new Permission("JavaScript", 4), null)
            ])
        ];        
    }

    private onRoleChanged()
    {
        this.resetPermissionsTree(this.permissionsTree);
        this.updatePermissionsTree(this.permissionsTree)

        this.roleName.reset();
        this.roleName.setValue(this._role.Name);
    }

    private updatePermissionsTree(permissions: Array<TreeNode<Permission>>)
    {
        _.each(permissions, e =>
        {
            let permission = e.Value;
            if (permission.Value & this._role.PermissionsMask)
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

    public saveRole()
    {
        var mask = 0;
        var selectedItems = <Array<Permission>>this.rolesTree.selectedItems;
        _.each(selectedItems, r=>
        {
            console.log(r);
            mask |= r.Value;
        })
        this._role.PermissionsMask = mask;
        this._role.Name = this.roleName.value;

        if (this._role.Id === 0)
        {
            this.usersService.createRole(this._role);
        }
    }

    private get caption(): string
    {
        return this._role.Id === 0 ? "Создание роли" : "Редактирование роли";
    }
}