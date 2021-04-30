import { BinaryTree } from "./binary-tree";
import { treeObj } from "../data/treeObject";
import { TraverseType } from "../models/tree";

describe("BinaryTree", () => {
  const tree = new BinaryTree(treeObj);
  const newTree = {
    value: 1,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  };
  describe("Get column", () => {
    it("column equal 0", () => {
      expect(tree.getColumn(0)).toEqual([5, 8, 10]);
    });
    it("column equal 1", () => {
      expect(tree.getColumn(1)).toEqual([7, 11, 12, 13]);
    });
    it("column equal 2", () => {
      expect(tree.getColumn(2)).toEqual([14]);
    });
    it("column equal 3", () => {
      expect(tree.getColumn(3)).toEqual([15]);
    });
    it("column equal -1", () => {
      expect(tree.getColumn(-1)).toEqual([3, 4, 6, 9]);
    });
    it("column equal -2", () => {
      expect(tree.getColumn(-2)).toEqual([2]);
    });
    it("column equal -3", () => {
      expect(tree.getColumn(-3)).toEqual([1]);
    });
  });
  describe("Traverse", () => {
    const result = [8, 4, 12, 2, 5, 10, 14, 1, 3, 6, 7, 9, 11, 13, 15];
    it("BFS", () => {
      expect(tree.traverse(TraverseType.BFS)).toEqual(result);
    });
    it("DFS inOrder", () => {
      const result = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      expect(tree.traverse(TraverseType.DFS_InOrder)).toEqual(result);
    });
    it("DFS PostOrder", () => {
      const result = [1, 3, 2, 6, 7, 5, 4, 9, 11, 10, 13, 15, 14, 12, 8];
      expect(tree.traverse(TraverseType.DFS_PostOrder)).toEqual(result);
    });
    it("DFS PreOrder", () => {
      const result = [8, 4, 2, 1, 3, 5, 6, 7, 12, 10, 9, 11, 14, 13, 15];
      expect(tree.traverse(TraverseType.DFS_PreOrder)).toEqual(result);
    });
    it("Set tree", () => {
      const setTree = new BinaryTree(treeObj);
      expect(setTree.setTree(newTree)).toEqual(setTree);
    });
  });
});
