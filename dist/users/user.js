"use strict";
var User = (function () {
    function User(Id, Login, Password, FirstName, LastName, Role) {
        this.Id = Id;
        this.Login = Login;
        this.Password = Password;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Role = Role;
    }
    Object.defineProperty(User.prototype, "Name", {
        get: function () {
            return this.FirstName + " " + this.LastName;
        },
        enumerable: true,
        configurable: true
    });
    User.Empty = function () {
        return new User(0, "", "", "", "", new Role(1, "Administrator", 1));
    };
    return User;
}());
exports.User = User;
var Role = (function () {
    function Role(Id, Name, PermissionsMask) {
        this.Id = Id;
        this.Name = Name;
        this.PermissionsMask = PermissionsMask;
    }
    return Role;
}());
exports.Role = Role;
//# sourceMappingURL=user.js.map