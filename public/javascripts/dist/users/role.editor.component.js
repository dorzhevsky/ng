"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require('@angular/forms');
var user_1 = require("./user");
var permission_1 = require("./permission");
var treeNode_class_1 = require("./treeNode.class");
var tree_component_1 = require("./tree.component");
var users_service_1 = require("./users.service");
require('jquery');
var _ = require('lodash');
var RoleEditorComponent = (function () {
    function RoleEditorComponent(formBuilder, usersService) {
        this.formBuilder = formBuilder;
        this.usersService = usersService;
        this.roleName = new forms_1.FormControl("", forms_1.Validators.required);
    }
    Object.defineProperty(RoleEditorComponent.prototype, "role", {
        set: function (role) {
            if (role) {
                this._role = role;
                this.onRoleChanged();
            }
        },
        enumerable: true,
        configurable: true
    });
    RoleEditorComponent.prototype.ngOnInit = function () {
        this.permissionsTree =
            [
                new treeNode_class_1.TreeNode(new permission_1.Permission("Programming", 0), [
                    new treeNode_class_1.TreeNode(new permission_1.Permission("C#", 1), null),
                    new treeNode_class_1.TreeNode(new permission_1.Permission("Python", 2), null),
                    new treeNode_class_1.TreeNode(new permission_1.Permission("JavaScript", 4), null)
                ])
            ];
    };
    RoleEditorComponent.prototype.onRoleChanged = function () {
        this.resetPermissionsTree(this.permissionsTree);
        this.updatePermissionsTree(this.permissionsTree);
        this.roleName.reset();
        this.roleName.setValue(this._role.Name);
    };
    RoleEditorComponent.prototype.updatePermissionsTree = function (permissions) {
        var _this = this;
        _.each(permissions, function (e) {
            var permission = e.Value;
            if (permission.Value & _this._role.PermissionsMask) {
                e.Check(true);
            }
            if (e.Children && e.Children.length > 0) {
                _this.updatePermissionsTree(e.Children);
            }
        });
    };
    RoleEditorComponent.prototype.resetPermissionsTree = function (permissions) {
        var _this = this;
        _.each(permissions, function (e) {
            e.Checked = false;
            e.Indeterminate = false;
            if (e.Children && e.Children.length > 0) {
                _this.resetPermissionsTree(e.Children);
            }
        });
    };
    RoleEditorComponent.prototype.saveRole = function () {
        var mask = 0;
        var selectedItems = this.rolesTree.selectedItems;
        _.each(selectedItems, function (r) {
            console.log(r);
            mask |= r.Value;
        });
        this._role.PermissionsMask = mask;
        this._role.Name = this.roleName.value;
        if (this._role.Id === 0) {
            this.usersService.createRole(this._role);
        }
    };
    Object.defineProperty(RoleEditorComponent.prototype, "caption", {
        get: function () {
            return this._role.Id === 0 ? "Создание роли" : "Редактирование роли";
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.Role), 
        __metadata('design:paramtypes', [user_1.Role])
    ], RoleEditorComponent.prototype, "role", null);
    __decorate([
        core_1.ViewChild(tree_component_1.TreeComponent), 
        __metadata('design:type', tree_component_1.TreeComponent)
    ], RoleEditorComponent.prototype, "rolesTree", void 0);
    RoleEditorComponent = __decorate([
        core_1.Component({
            selector: "roleEditor",
            templateUrl: "javascripts/app/users/role.editor.component.html"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, users_service_1.UsersService])
    ], RoleEditorComponent);
    return RoleEditorComponent;
}());
exports.RoleEditorComponent = RoleEditorComponent;
//# sourceMappingURL=role.editor.component.js.map