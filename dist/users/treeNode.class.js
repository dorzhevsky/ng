"use strict";
var _ = require('lodash');
var TreeNode = (function () {
    function TreeNode(value, children) {
        var _this = this;
        this.value = value;
        this.children = [];
        this.children = children || [];
        this.children.forEach(function (e) { return e.parent = _this; });
    }
    Object.defineProperty(TreeNode.prototype, "Value", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.AddNode = function (node) {
        node.parent = this;
        this.children.push(node);
    };
    Object.defineProperty(TreeNode.prototype, "Children", {
        get: function () {
            return this.children;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "Parent", {
        get: function () {
            return this.parent;
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.Check = function (checked) {
        this.CheckInternal(checked, true, true);
    };
    TreeNode.prototype.CheckInternal = function (checked, up, down) {
        this.Checked = checked;
        this.Indeterminate = false;
        if (down) {
            if (this.children) {
                _.each(this.children, function (e) { return e.CheckInternal(checked, false, true); });
            }
        }
        if (up) {
            if (this.parent) {
                var siblings = this.parent.children;
                var allSiblingsAreChecked = _.every(siblings, function (e) { return e.Checked; });
                if (allSiblingsAreChecked) {
                    this.parent.CheckInternal(true, true, false);
                    return;
                }
                var allSiblingsAreUncheked = _.every(siblings, function (e) { return !e.Checked; });
                if (allSiblingsAreUncheked) {
                    this.parent.CheckInternal(false, true, false);
                    return;
                }
                this.parent.indeterminate();
            }
        }
    };
    TreeNode.prototype.indeterminate = function () {
        this.Indeterminate = true;
        this.Checked = false;
        if (this.parent) {
            this.parent.indeterminate();
        }
    };
    TreeNode.prototype.getSelectedItems = function () {
        var selectedItems = [];
        this.getSelectedItemsInternal(selectedItems);
        return selectedItems;
    };
    TreeNode.prototype.getSelectedItemsInternal = function (selectedItems) {
        // console.log("getSelectedItemsInternal");
        // console.log(this.Value);
        // console.log(this.Checked);
        if (this.Checked) {
            selectedItems.push(this.value);
        }
        if (this.Children && this.Children.length > 0) {
            _.each(this.Children, function (c) { return c.getSelectedItemsInternal(selectedItems); });
        }
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
//# sourceMappingURL=treeNode.class.js.map