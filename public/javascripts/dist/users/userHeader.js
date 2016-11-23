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
var UserHeaderComponent = (function () {
    function UserHeaderComponent() {
    }
    Object.defineProperty(UserHeaderComponent.prototype, "Name", {
        get: function () {
            if (!this.selectedUser || this.selectedUser.Id === 0) {
                return "Новый пользователь";
            }
            return this.selectedUser.Name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserHeaderComponent.prototype, "Role", {
        get: function () {
            if (!this.selectedUser || this.selectedUser.Id === 0) {
                return "";
            }
            return this.selectedUser.Role.Name;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserHeaderComponent.prototype, "selectedUser", void 0);
    UserHeaderComponent = __decorate([
        core_1.Component({
            selector: "userHeader",
            template: "\n   <div class=\"grid-title no-border\">\n        <div class=\"row users-header-area\" style=\"vertical-align: text-top;\">\n            <div class=\"col-sm-12\">\n                <div id=\"users-selected-header\">{{Name}}</div>\n            </div>\n            <div class=\"col-sm-12\" id=\"users-new-description-area\">\n                <div id=\"users-new-description\">{{Role}}</div>\n            </div>\n        </div>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], UserHeaderComponent);
    return UserHeaderComponent;
}());
exports.UserHeaderComponent = UserHeaderComponent;
//# sourceMappingURL=userHeader.js.map