// How to find duplicate elements in an array?

const arrNumber = [1, 2, 3, 2, 4, 5, 6, 4];
const duplicates = arrNumber.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);
// filter(predicate: (value: number, index: number, array: number[]))
console.log("duplicates", duplicates);

// const arrNumber = [1, 2, 3, 2, 4, 5, 6, 4];:
// This line defines an array called arrNumber containing several numbers, some of which are duplicates.

// const duplicates = arrNumber.filter((ele, index, arr) => arr.indexOf(ele) !== index);:
// In this line, the filter method is used to create a new array called duplicates. The filter method iterates through each element of the arrNumber array and applies a provided function to each element. The provided function is defined as (ele, index, arr) => arr.indexOf(ele) !== index.

// ele: This parameter represents the current element being processed during each iteration.
// index: This parameter represents the index of the current element in the array.
// arr: This parameter represents the array itself (arrNumber in this case).
// Inside the provided function, arr.indexOf(ele) is used to find the first index at which the current element (ele) appears in the array arrNumber. If this index is not equal to the current index (index), it means that the element appears more than once in the array (i.e., it's a duplicate).

// So, the filter method collects all elements for which the condition arr.indexOf(ele) !== index is true, effectively creating an array of duplicates.

// console.log("duplicates", duplicates);:
// Finally, this line prints the duplicates array to the console.

// When you run this code, it will output the duplicates found in the arrNumber array. In your example array, the duplicates are [2, 2, 4, 4], and that's what will be printed to the console
