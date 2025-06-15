type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = function (
  arr: MultiDimensionalArray,
  n: number,
): MultiDimensionalArray {
  const ans: MultiDimensionalArray = [];

  const flatten = (arr: MultiDimensionalArray, depth: number) => {
    for (const item of arr) {
      if (Array.isArray(item) && depth < n) {
        flatten(item, depth + 1);
      } else {
        ans.push(item);
      }
    }
    return ans;
  };

  return flatten(arr, 0);
};
