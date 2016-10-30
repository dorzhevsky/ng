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
require('jquery');
var MfiTooltipComponent = (function () {
    function MfiTooltipComponent(element) {
        this.element = element;
    }
    Object.defineProperty(MfiTooltipComponent.prototype, "Text", {
        set: function (val) {
            this.text = val;
            this.position(this.element.nativeElement, this.ReferenceElement.nativeElement);
        },
        enumerable: true,
        configurable: true
    });
    MfiTooltipComponent.prototype.position = function (popup, input) {
        setTimeout(function () {
            var popupContainer = $(popup).children().eq(0);
            var inputEl = $(input);
            popupContainer.css({
                position: "absolute",
                left: inputEl.position().left + inputEl.outerWidth() / 2 - popupContainer.outerWidth() / 2,
                top: inputEl.position().top - popupContainer.outerHeight() - 5
            });
        }, 0);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MfiTooltipComponent.prototype, "Text", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.ElementRef)
    ], MfiTooltipComponent.prototype, "ReferenceElement", void 0);
    MfiTooltipComponent = __decorate([
        core_1.Component({
            template: "<div style=\"opacity:1;left:-10000px;top:-10000px;\" class=\"tooltip tooltip-top\" role=\"tooltip\">\n        <div class=\"tooltip-arrow\"></div>\n        <div class=\"tooltip-inner\">\n            {{text}}\n        </div>\n     </div>\n    "
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MfiTooltipComponent);
    return MfiTooltipComponent;
}());
exports.MfiTooltipComponent = MfiTooltipComponent;
//# sourceMappingURL=tooltip.component.js.map