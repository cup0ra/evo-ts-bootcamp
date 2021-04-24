import { CompareFunction } from "../models/tree";

export const compareFunction = <T>(a: T, b: T): number => {
  return a === b ? 0 : a > b ? 1 : -1;
};

export const mergeSort = <T>(
  array: T[],
  compareFunction: CompareFunction<T>
): T[] => {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle), compareFunction);
  let right = mergeSort(array.slice(middle), compareFunction);
  return merge(left, right, compareFunction);
};

const merge = <T>(
  left: T[],
  right: T[],
  compareFunction: CompareFunction<T>
): T[] => {
  let result: T[] = [];
  while (left.length && right.length) {
    result = [
      ...result,
      compareFunction(left[0], right[0]) < 0 ? left.shift()! : right.shift()!,
    ];
  }
  return [...result, ...left, ...right];
};
