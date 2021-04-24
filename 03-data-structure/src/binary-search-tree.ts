import { BinaryTree } from "./binary-tree";
import { treeObj } from "../data/treeObject";
import { TreeNode } from "../models/tree";

export class BinarySearchTree extends BinaryTree<number> {
  has(value: number): boolean {
    return !!this.search(this.root, value);
  }
  search(node: TreeNode<number> | null, value: number): number | null {
    return !node || isNaN(value)
      ? null
      : node.value < value
      ? this.search(node.right, value)
      : node.value > value
      ? this.search(node.left, value)
      : node.value;
  }
}
