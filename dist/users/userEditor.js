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
var tree_component_1 = require("./tree.component");
var users_service_1 = require("./users.service");
require('jquery');
//declare var $:JQueryStatic;
var UserEditorComponent = (function () {
    function UserEditorComponent(formBuilder, usersService) {
        this.formBuilder = formBuilder;
        this.usersService = usersService;
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
        this.roles = this.usersService.getRoles();
    }
    UserEditorComponent.prototype.ngOnInit = function () {
        var that = this;
        this.role.valueChanges.subscribe(function () {
            that.selectedRole = that.role.value;
        });
    };
    Object.defineProperty(UserEditorComponent.prototype, "selectedUser", {
        set: function (user) {
            this.user = user;
            this.selectedRole = this.user.Role;
            this.login.reset();
            this.login.setValue(user.Login);
            //TODO: Reset all form controls
            this.password.setValue(user.Password);
            this.firstName.setValue(user.FirstName);
            this.lastName.setValue(user.LastName);
            this.role.setValue(user.Role);
        },
        enumerable: true,
        configurable: true
    });
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
        core_1.ViewChild(tree_component_1.TreeComponent), 
        __metadata('design:type', tree_component_1.TreeComponent)
    ], UserEditorComponent.prototype, "rolesTree", void 0);
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
        __metadata('design:paramtypes', [forms_1.FormBuilder, users_service_1.UsersService])
    ], UserEditorComponent);
    return UserEditorComponent;
}());
exports.UserEditorComponent = UserEditorComponent;
//# sourceMappingURL=userEditor.js.map