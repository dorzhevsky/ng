"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Permission = (function () {
    function Permission(name, value) {
        this.name = name;
        this.value = value;
    }
    Object.defineProperty(Permission.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Permission.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Permission.prototype, "Permissions", {
        get: function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Permission.prototype, "IsGroup", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return Permission;
}());
exports.Permission = Permission;
var PermissionGroup = (function (_super) {
    __extends(PermissionGroup, _super);
    function PermissionGroup(name, permissions) {
        _super.call(this, name, 0);
        this.permissions = permissions;
    }
    Object.defineProperty(PermissionGroup.prototype, "Permissions", {
        get: function () {
            return this.permissions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionGroup.prototype, "IsGroup", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionGroup.prototype, "Value", {
        get: function () {
            var val = 0;
            this.permissions.forEach(function (p) {
                val |= p.Value;
            });
            return val;
        },
        enumerable: true,
        configurable: true
    });
    return PermissionGroup;
}(Permission));
exports.PermissionGroup = PermissionGroup;
//# sourceMappingURL=permission.js.map