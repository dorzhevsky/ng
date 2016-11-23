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
    CustomValidationService.CheckLogin = function (control) {
        if (control.value && !control.value.match(/^[A-Za-z]/)) {
            return { invalidLogin: true };
        }
    };
    CustomValidationService.CheckPassword = function (control) {
        if (control.value && !control.value.match(/.{6,}/)) {
            return { invalidPassword: true };
        }
    };
    CustomValidationService.CheckName = function (control) {
        if (control.value && !control.value.match(/^[А-Яа-яA-Za-z]+$/)) {
            return { invalidName: true };
        }
    };
    Object.defineProperty(CustomValidationService.prototype, "Messages", {
        get: function () {
            return {
                "invalidLogin": "Логин должен начинаться с латинской буквы",
                "invalidPassword": "Пароль должен содержать минимум 6 символов",
                "invalidName": "Имя должно содержать только буквы",
                "required": "Необходимо задать значение"
            };
        },
        enumerable: true,
        configurable: true
    });
    return CustomValidationService;
}(ValidationService));
exports.CustomValidationService = CustomValidationService;
//# sourceMappingURL=validation.service.js.map