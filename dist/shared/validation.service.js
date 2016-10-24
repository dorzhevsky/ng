"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.prototype.getMessage = function (control) {
        if (!control.errors) {
            return "";
        }
        for (var prop in control.errors) {
            if (this.Messages[prop]) {
                return this.Messages[prop];
            }
        }
        return "";
    };
    Object.defineProperty(ValidationService.prototype, "Messages", {
        get: function () {
            return {
                "required": "Необходимо задать значение"
            };
        },
        enumerable: true,
        configurable: true
    });
    return ValidationService;
}());
exports.ValidationService = ValidationService;
var CustomValidationService = (function (_super) {
    __extends(CustomValidationService, _super);
    function CustomValidationService() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(CustomValidationService.prototype, "Messages", {
        get: function () {
            return {
                "required": "Value is required"
            };
        },
        enumerable: true,
        configurable: true
    });
    return CustomValidationService;
}(ValidationService));
exports.CustomValidationService = CustomValidationService;
//# sourceMappingURL=validation.service.js.map