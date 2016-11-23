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
var user_1 = require("./user");
var generator_1 = require("../shared/generator");
var UsersService = (function () {
    function UsersService() {
        this.adminRole = new user_1.Role(1, "Administrator", 1);
        this.hrRole = new user_1.Role(2, "HR", 2);
        this.roles =
            [
                this.adminRole,
                this.hrRole
            ];
        this.users = [
            new user_1.User(generator_1.Generator.Next(), "dorzhevsky", "qwerty", "Dmitry", "Orzhevsky", this.adminRole),
            new user_1.User(generator_1.Generator.Next(), "ashkarin", "qwerty", "Anton", "Shkarin", this.adminRole),
            new user_1.User(generator_1.Generator.Next(), "esokolova", "qwerty", "Elena", "Sokolova", this.hrRole),
            new user_1.User(generator_1.Generator.Next(), "dbashkalin", "qwerty", "Dmitry", "Bashkalin", this.hrRole),
            new user_1.User(generator_1.Generator.Next(), "adegtev", "qwerty", "Alex", "Degtev", this.hrRole)
        ];
    }
    UsersService.prototype.getUsers = function () {
        return this.users;
    };
    UsersService.prototype.getRoles = function () {
        return this.roles;
    };
    UsersService.prototype.createRole = function (role) {
        role.Id = generator_1.Generator.Next();
        this.roles.push(role);
    };
    UsersService.prototype.getEmptyUser = function () {
        return new user_1.User(0, "", "", "", "", this.adminRole);
    };
    UsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map