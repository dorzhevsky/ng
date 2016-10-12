"use strict";
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getMessage = function (control) {
        if (!control.errors) {
            return "";
        }
        for (var prop in control.errors) {
            if (ValidationService.Messages[prop]) {
                return ValidationService.Messages[prop];
            }
        }
        return "";
    };
    Object.defineProperty(ValidationService, "Messages", {
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
//# sourceMappingURL=validation.service.js.map