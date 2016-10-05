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
var generator_1 = require("../shared/generator");
var permission_1 = require("./permission");
var treeNode_class_1 = require("./treeNode.class");
require('jquery');
var _ = require("lodash");
//declare var $:JQueryStatic;
var UserEditorComponent = (function () {
    function UserEditorComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.userSaved = new core_1.EventEmitter();
        this.userDeleted = new core_1.EventEmitter();
        this.login = new forms_1.FormControl("", forms_1.Validators.required);
        this.password = new forms_1.FormControl("", forms_1.Validators.required);
        this.firstName = new forms_1.FormControl("", forms_1.Validators.required);
        this.lastName = new forms_1.FormControl("", forms_1.Validators.required);
        this.role = new forms_1.FormControl("", forms_1.Validators.required);
        this.form = this.formBuilder.group({
            "login": this.login,
            "password": this.password,
            "firstName": this.firstName,
            "lastName": this.lastName,
            "role": this.role
        });
        this.messages =
            {
                required: 'Необходимо задать значение'
            };
        this.roles =
            [
                new user_1.Role(1, "Administrator", 1),
                new user_1.Role(2, "HR", 2),
                new user_1.Role(3, "Offices", 4)
            ];
        this.permissionsTree =
            [
                new treeNode_class_1.TreeNode(new permission_1.Permission("Programming", 0), [
                    new treeNode_class_1.TreeNode(new permission_1.Permission("C#", 1), null),
                    new treeNode_class_1.TreeNode(new permission_1.Permission("Python", 2), null),
                    new treeNode_class_1.TreeNode(new permission_1.Permission("JavaScript", 4), null)
                ])
            ];
        var that = this;
        this.role.valueChanges.subscribe(function () {
            console.log(that.role.value);
            that.resetPermissionsTree(that.permissionsTree);
            that.updatePermissionsTree(that.permissionsTree);
        });
    }
    Object.defineProperty(UserEditorComponent.prototype, "selectedUser", {
        set: function (user) {
            this.user = user;
            this.login.reset();
            this.login.setValue(user.Login);
            this.password.setValue(user.Password);
            this.firstName.setValue(user.FirstName);
            this.lastName.setValue(user.LastName);
            this.role.setValue(user.Role);
            // this.resetPermissionsTree(this.permissionsTree);
            // this.updatePermissionsTree(this.permissionsTree);
        },
        enumerable: true,
        configurable: true
    });
    UserEditorComponent.prototype.updatePermissionsTree = function (permissions) {
        var _this = this;
        _.each(permissions, function (e) {
            var permission = e.Value;
            // console.log("Permission mask");
            // console.log(this.role.value.PermissionsMask);
            if (permission.Value & _this.role.value.PermissionsMask) {
                e.Check(true);
            }
            if (e.Children && e.Children.length > 0) {
                _this.updatePermissionsTree(e.Children);
            }
        });
    };
    UserEditorComponent.prototype.resetPermissionsTree = function (permissions) {
        var _this = this;
        _.each(permissions, function (e) {
            e.Checked = false;
            e.Indeterminate = false;
            if (e.Children && e.Children.length > 0) {
                _this.resetPermissionsTree(e.Children);
            }
        });
    };
    UserEditorComponent.prototype.onChange = function (role) {
        // this.user.Role = role;
        // console.log("onChnage");
        // console.log(role.Name);
    };
    UserEditorComponent.prototype.saveUser = function () {
        if (this.form.valid) {
            if (this.user) {
                this.user.Login = this.login.value;
                this.user.Password = this.password.value;
                this.user.FirstName = this.firstName.value;
                this.user.LastName = this.lastName.value;
                this.user.Role = this.role.value;
                if (this.user.Id === 0) {
                    this.user.Id = generator_1.Generator.Next();
                    this.userSaved.emit(this.user);
                }
            }
        }
    };
    UserEditorComponent.prototype.deleteUser = function () {
        this.userDeleted.emit(this.user);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UserEditorComponent.prototype, "userSaved", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UserEditorComponent.prototype, "userDeleted", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User), 
        __metadata('design:paramtypes', [user_1.User])
    ], UserEditorComponent.prototype, "selectedUser", null);
    UserEditorComponent = __decorate([
        core_1.Component({
            selector: "userEditor",
            templateUrl: "./app/users/userEditor.html"
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], UserEditorComponent);
    return UserEditorComponent;
}());
exports.UserEditorComponent = UserEditorComponent;
//# sourceMappingURL=userEditor.js.map