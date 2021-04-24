"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.BinaryTree = void 0;
var tree_1 = require("./models/tree");
var BinaryTree = /** @class */ (function () {
    function BinaryTree(tree) {
        this.root = tree;
    }
    BinaryTree.prototype.setTree = function (tree) {
        this.root = tree;
        return this;
    };
    BinaryTree.prototype.inOrder = function (node) {
        return !node
            ? []
            : __spreadArrays(this.inOrder(node.left), [node.value], this.inOrder(node.right));
    };
    BinaryTree.prototype.preOrder = function (node) {
        return !node
            ? []
            : __spreadArrays([node.value], this.preOrder(node.left), this.preOrder(node.right));
    };
    BinaryTree.prototype.postOrder = function (node) {
        return !node
            ? []
            : __spreadArrays(this.postOrder(node.left), this.postOrder(node.right), [
                node.value,
            ]);
    };
    BinaryTree.prototype.bfs = function (node) {
        var queue = [node];
        var result = [];
        while (queue.length) {
            var curr = queue.shift();
            if (!curr)
                return result;
            result.push(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
        return result;
    };
    BinaryTree.prototype.traverse = function (traverseType) {
        switch (traverseType) {
            case tree_1.TraverseType.DFS_InOrder:
                return this.inOrder(this.root);
            case tree_1.TraverseType.DFS_PostOrder:
                return this.postOrder(this.root);
            case tree_1.TraverseType.DFS_PreOrder:
                return this.preOrder(this.root);
            case tree_1.TraverseType.BFS:
                return this.bfs(this.root);
        }
    };
    BinaryTree.prototype.getColumn = function (columnOrder) {
        var getColumnValue = function (node, columnNumber) {
            return !node
                ? []
                : __spreadArrays((columnNumber === columnOrder ? [node.value] : []), getColumnValue(node.left, columnNumber - 1), getColumnValue(node.right, columnNumber + 1));
        };
        return getColumnValue(this.root, 0);
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
