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
var _ = require('lodash');
var TreeComponent = (function () {
    function TreeComponent() {
        this.childrenVisible = false;
        this.level = 0;
    }
    TreeComponent.prototype.toggle = function () {
        this.childrenVisible = !this.childrenVisible;
    };
    TreeComponent.prototype.check = function (node, checked) {
        node.Check(checked);
    };
    Object.defineProperty(TreeComponent.prototype, "selectedItems", {
        get: function () {
            var selectedItems = [];
            _.each(this.tree, function (n) {
                selectedItems = _.union(selectedItems, n.getSelectedItems());
            });
            return selectedItems;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TreeComponent.prototype, "tree", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef)
    ], TreeComponent.prototype, "itemTemplate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TreeComponent.prototype, "level", void 0);
    TreeComponent = __decorate([
        core_1.Component({
            selector: "tree",
            template: "\n   <ul style=\"padding-left:0;\">\n        <li *ngFor=\"let p of tree; let i = index;\" data-menu-item=\"true\">\n            <a href=\"javascript:void(0)\">\n                <div class=\"checkbox\" style=\"display: inline-block;\">\n                    <input [indeterminate]=\"p.Indeterminate\" (change)=\"check(p, $event.target.checked)\" [checked]=\"p.Checked\" [attr.id]=\"level + '_' + i\" type=\"checkbox\">\n                    <label [attr.for]=\"level + '_' + i\" >&nbsp;</label>\n                </div>\n            </a>\n            <span (click)=\"toggle()\" >\n                <template [ngTemplateOutlet]=\"itemTemplate\"\n                          [ngOutletContext]=\"p\">\n                </template>\n            </span>\n            <div *ngIf=\"p.Children && p.Children.length > 0 && childrenVisible\" style=\"padding-left: 15px;\">\n                <tree [level]=\"level + 1\" [itemTemplate]=\"itemTemplate\" [tree]=\"p.Children\"></tree>\n            </div>            \n        </li>\n   </ul>   \n   "
        }), 
        __metadata('design:paramtypes', [])
    ], TreeComponent);
    return TreeComponent;
}());
exports.TreeComponent = TreeComponent;
//# sourceMappingURL=tree.component.js.map