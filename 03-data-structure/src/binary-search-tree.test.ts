import { BinarySearchTree } from "./binary-search-tree";
import { treeObj } from "../data/treeObject";

describe("BinarySearchTree", () => {
  const binarySearch = new BinarySearchTree(treeObj);
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
});
