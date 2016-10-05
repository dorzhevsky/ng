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
var tooltip_directive_1 = require("./tooltip.directive");
var tooltip_component_1 = require("./tooltip.component");
var ddlist_1 = require("../shared/ddlist");
var confirm_1 = require("../shared/confirm");
var forms_1 = require('@angular/forms');
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [
                confirm_1.ConfirmDirective,
                tooltip_directive_1.MfiTooltipDirective,
                tooltip_component_1.MfiTooltipComponent,
                ddlist_1.MfiDdlistComponent
            ],
            exports: [
                confirm_1.ConfirmDirective,
                tooltip_directive_1.MfiTooltipDirective,
                ddlist_1.MfiDdlistComponent
            ],
            entryComponents: [tooltip_component_1.MfiTooltipComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map