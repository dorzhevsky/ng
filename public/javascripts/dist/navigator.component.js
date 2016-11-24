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
var NavigatorComponent = (function () {
    function NavigatorComponent() {
    }
    NavigatorComponent = __decorate([
        core_1.Component({
            selector: 'navigator',
            template: "\n            <div class=\"page-sidebar-wrapper\" id=\"main-menu-wrapper\" style=\"overflow: hidden; width: auto; height: 837px;\">\n                <ul class=\"nav nav-list\">\n                    <li [routerLink]=\"['dashboard']\" [routerLinkActive]=\"['active']\">\n                        <a href=\"javascript:void(0);\">\n                            <i class=\"icon-custom-home\"></i>\n                            <span class=\"title\">\u0413\u043B\u0430\u0432\u043D\u043E\u0435</span>\n                        </a>\n                    </li>\n                    <li [routerLink]=\"['users']\"  [routerLinkActive]=\"['active']\">\n                        <a href=\"javascript:void(0);\">\n                            <i class=\"fa fa-shield\"></i>\n                            <span class=\"title\">\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438</span>\n                        </a>\n                    </li>\n                </ul>\n            </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], NavigatorComponent);
    return NavigatorComponent;
}());
exports.NavigatorComponent = NavigatorComponent;
//# sourceMappingURL=navigator.component.js.map