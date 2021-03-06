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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var usersList_1 = require('./usersList');
var userHeader_1 = require("./userHeader");
var userEditor_1 = require("./userEditor");
var role_editor_component_1 = require("./role.editor.component");
var tree_component_1 = require("./tree.component");
var users_service_1 = require("./users.service");
var forms_1 = require('@angular/forms');
var shared_module_1 = require('../shared/shared.module');
var users_component_1 = require("./users.component");
var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, shared_module_1.SharedModule],
            declarations: [
                users_component_1.UsersComponent,
                usersList_1.UsersListComponent,
                userHeader_1.UserHeaderComponent,
                userEditor_1.UserEditorComponent,
                role_editor_component_1.RoleEditorComponent,
                tree_component_1.TreeComponent
            ],
            exports: [
                users_component_1.UsersComponent,
                usersList_1.UsersListComponent,
                userHeader_1.UserHeaderComponent,
                userEditor_1.UserEditorComponent,
                role_editor_component_1.RoleEditorComponent,
                tree_component_1.TreeComponent
            ],
            providers: [users_service_1.UsersService]
        }), 
        __metadata('design:paramtypes', [])
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map