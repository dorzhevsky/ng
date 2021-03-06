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
var app_component_1 = require('./app.component');
var navigator_component_1 = require("./navigator.component");
var router_1 = require("@angular/router");
var users_module_1 = require("./users/users.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var users_component_1 = require("./users/users.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                users_module_1.UsersModule,
                dashboard_module_1.DashboardModule,
                router_1.RouterModule.forRoot([
                    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
                    { path: "users", component: users_component_1.UsersComponent },
                    { path: "", redirectTo: "dashboard", pathMatch: 'full' }
                ], { useHash: true })
            ],
            declarations: [app_component_1.AppComponent, navigator_component_1.NavigatorComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map