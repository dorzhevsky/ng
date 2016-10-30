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
var forms_1 = require("@angular/forms");
var MfiDdlistComponent = (function () {
    function MfiDdlistComponent(element) {
        this.element = element;
        this.propagateChange = function (_) { };
        //Название обязано быть таким!!!!
        this.selectedItemChange = new core_1.EventEmitter();
        this.isOpen = false;
    }
    Object.defineProperty(MfiDdlistComponent.prototype, "defaultText", {
        set: function (v) {
            console.log("defaultValue setter");
            this._defaultText = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MfiDdlistComponent.prototype, "items", {
        set: function (i) {
            console.log("items setter");
            this._items = i;
        },
        enumerable: true,
        configurable: true
    });
    MfiDdlistComponent.prototype.writeValue = function (value) {
        console.log("write value");
        if (value !== undefined) {
            this.selectedItem = value;
        }
    };
    MfiDdlistComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    MfiDdlistComponent.prototype.registerOnTouched = function () { };
    Object.defineProperty(MfiDdlistComponent.prototype, "selectedItem", {
        get: function () {
            return this._selectedItem;
        },
        set: function (val) {
            console.log("selectedItem setter");
            this._selectedItem = val;
            this.selectedItemChange.emit(this._selectedItem);
            this.propagateChange(this._selectedItem);
        },
        enumerable: true,
        configurable: true
    });
    MfiDdlistComponent.prototype.ngOnInit = function () {
        console.log("OnInit");
    };
    MfiDdlistComponent.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
    };
    MfiDdlistComponent.prototype.close = function () {
        this.isOpen = false;
    };
    MfiDdlistComponent.prototype.open = function () {
        this.isOpen = true;
    };
    MfiDdlistComponent.prototype.onClick = function (e) {
        // if (!this.element.nativeElement.contains(e.target)) {
        //     this.close();
        // }
    };
    MfiDdlistComponent.prototype.selectItem = function (item) {
        this.selectedItem = item;
        this.close();
    };
    Object.defineProperty(MfiDdlistComponent.prototype, "selectedText", {
        get: function () {
            return !this.selectedItem ? this._defaultText : this.selectedItem.Name;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MfiDdlistComponent.prototype, "defaultText", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], MfiDdlistComponent.prototype, "items", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MfiDdlistComponent.prototype, "selectedItemChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], MfiDdlistComponent.prototype, "selectedItem", null);
    MfiDdlistComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"btn-group\" [class.open]=\"isOpen\" style=\"margin-top:5px;\">\n        <button type=\"button\" (click)=\"toggle()\" class=\"btn btn-white dropdown-toggle btn-small\" data-toggle=\"dropdown\">{{selectedText}} <span class=\"caret\"></span></button>\n        <ul class=\"dropdown-menu\">\n            <li *ngFor=\"let item of _items;\" (click)=\"selectItem(item)\">\n                <a href=\"javascript:void(0)\">{{item.Name}}</a>\n            </li>\n        </ul>\n    </div>",
            selector: "mfiddlist",
            host: {
                '(document:click)': 'onClick($event)',
            },
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return MfiDdlistComponent; }),
                    multi: true
                }
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MfiDdlistComponent);
    return MfiDdlistComponent;
}());
exports.MfiDdlistComponent = MfiDdlistComponent;
//# sourceMappingURL=ddlist.js.map