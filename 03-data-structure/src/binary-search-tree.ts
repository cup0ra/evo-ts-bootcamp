import { BinaryTree } from "./binary-tree";
import { TreeNode } from "../models/tree";

export class BinarySearchTree extends BinaryTree<number> {
  public has(value: number): boolean {
    return !!this.search(this.root, value);
  }
  private search(node: TreeNode<number> | null, value: number): number | null {
    return !node || isNaN(value)
      ? null
      : node.value < value
      ? this.search(node.right, value)
      : node.value > value
      ? this.search(node.left, value)
      : node.value;
  }
}
