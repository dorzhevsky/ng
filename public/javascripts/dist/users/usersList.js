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
var users_service_1 = require("./users.service");
var _ = require('lodash');
var UsersListComponent = (function () {
    function UsersListComponent(usersService) {
        this.usersService = usersService;
        this.userSelected = new core_1.EventEmitter();
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.users = this.usersService.getUsers();
        this.createUser();
    };
    UsersListComponent.prototype.selectUser = function (user) {
        this.selectedUser = user;
        this.userSelected.emit(user);
    };
    UsersListComponent.prototype.createUser = function () {
        var emptyUser = this.usersService.getEmptyUser();
        this.selectedUser = emptyUser;
        this.userSelected.emit(emptyUser);
    };
    UsersListComponent.prototype.save = function (user) {
        this.users.push(user);
        this.selectedUser = user;
    };
    UsersListComponent.prototype.deleteUser = function (user) {
        console.log("Deleting user");
        var index = _.findIndex(this.users, function (e) { return e.Id === user.Id; });
        if (index >= 0) {
            this.users.splice(index, 1);
            this.createUser();
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UsersListComponent.prototype, "userSelected", void 0);
    UsersListComponent = __decorate([
        core_1.Component({
            selector: "usersList",
            templateUrl: "javascripts/app/users/usersList.html"
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;
//# sourceMappingURL=usersList.js.map