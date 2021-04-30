import { compareFunction, mergeSort } from "./merge-sort";

describe("MergeSort", () => {
  it("asserts the array of numbers is sorted correctly", () => {
    const array = [5, 6, 4, 3, 2, 1, 1, 2, 8, 9];
    expect(mergeSort(array, compareFunction)).toEqual(
      array.sort(compareFunction)
    );
  });
  it("asserts the array of string is sorted correctly", () => {
    const array = ["d", "a", "c", "b", "e", "f"];
    expect(mergeSort(array, compareFunction)).toEqual(
      array.sort(compareFunction)
    );
  });
  it("asserts the array of string is sorted correctly", () => {
    const array = ["d", "D", "a", "A", "c", "C", "b", "B", "e", "f"];
    expect(mergeSort(array, compareFunction)).toEqual(
      array.sort(compareFunction)
    );
  });
});
