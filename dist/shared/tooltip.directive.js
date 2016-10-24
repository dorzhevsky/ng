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
var tooltip_component_1 = require("./tooltip.component");
var validation_service_1 = require("./validation.service");
var MfiTooltipDirective = (function () {
    function MfiTooltipDirective(validationService, viewContainerRef, componentFactoryResolver) {
        this.validationService = validationService;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this._enabled = false;
        console.log("XXX");
        console.log(this.validationService);
        for (var p in this.validationService) {
            console.log(p);
            console.log(this.validationService[p]);
        }
    }
    MfiTooltipDirective.prototype.ngOnInit = function () {
        this.check();
    };
    MfiTooltipDirective.prototype.ngOnChanges = function () {
        this.check();
    };
    MfiTooltipDirective.prototype.check = function () {
        if (!this.enabled) {
            this.hideTooltip();
            return;
        }
        if (this._visible) {
            this.hideTooltip();
            this.showTooltip();
            return;
        }
    };
    MfiTooltipDirective.prototype.showTooltip = function () {
        if (!this.enabled || this._visible) {
            return;
        }
        this._visible = true;
        var componentFactory = this.componentFactoryResolver
            .resolveComponentFactory(tooltip_component_1.MfiTooltipComponent);
        this.tooltipComponentHost = this.viewContainerRef.createComponent(componentFactory);
        this.tooltipComponentHost.instance.ReferenceElement = this.viewContainerRef.element;
        this.tooltipComponentHost.instance.Text = this.text;
    };
    MfiTooltipDirective.prototype.hideTooltip = function () {
        if (this._visible) {
            this.tooltipComponentHost.destroy();
            this._visible = false;
        }
    };
    Object.defineProperty(MfiTooltipDirective.prototype, "text", {
        get: function () {
            return this.validationService.getMessage(this.formControl);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', forms_1.FormControl)
    ], MfiTooltipDirective.prototype, "formControl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MfiTooltipDirective.prototype, "enabled", void 0);
    __decorate([
        core_1.HostListener('focusin', ['$event', '$target']),
        core_1.HostListener('mouseenter', ['$event', '$target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MfiTooltipDirective.prototype, "showTooltip", null);
    __decorate([
        core_1.HostListener('focusout', ['$event', '$target']),
        core_1.HostListener('mouseleave', ['$event', '$target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MfiTooltipDirective.prototype, "hideTooltip", null);
    MfiTooltipDirective = __decorate([
        core_1.Directive({
            selector: "[mfitooltip]",
            providers: [
                { provide: validation_service_1.ValidationService, useClass: validation_service_1.CustomValidationService }
            ],
        }), 
        __metadata('design:paramtypes', [validation_service_1.ValidationService, core_1.ViewContainerRef, core_1.ComponentFactoryResolver])
    ], MfiTooltipDirective);
    return MfiTooltipDirective;
}());
exports.MfiTooltipDirective = MfiTooltipDirective;
//# sourceMappingURL=tooltip.directive.js.map