// How to find duplicate elements in an array?

const arrNumber = [1, 2, 3, 2, 4, 5, 6, 4];
const duplicates = arrNumber.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);
// filter(predicate: (value: number, index: number, array: number[]))
console.log("duplicates", duplicates);
