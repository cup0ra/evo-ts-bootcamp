import { BinarySearchTree } from "./binary-search-tree";
import { treeObj } from "../data/treeObject";

describe("BinarySearchTree", () => {
  const binarySearch = new BinarySearchTree(treeObj);
  const newTree = {
    value: 1,
    left: null,
    right: null,
  };
  it("asserts 19 to be false", () => {
    expect(binarySearch.has(19)).toEqual(false);
  });
  it("asserts 1 to be true", () => {
    expect(binarySearch.has(1)).toEqual(true);
  });
  it("asserts 10 to be true", () => {
    expect(binarySearch.has(10)).toEqual(true);
  });
  it("asserts -10 to be false", () => {
    expect(binarySearch.has(-10)).toEqual(false);
  });
  it("asserts NaN to be false", () => {
    expect(binarySearch.has(NaN)).toEqual(false);
  });
  it("column equal 3", () => {
    expect(binarySearch.getColumn(3)).toEqual([15]);
  });
  it("Set tree", () => {
    const setTree = new BinarySearchTree(treeObj);
    expect(setTree.setTree(newTree)).toEqual(setTree);
  });
});
