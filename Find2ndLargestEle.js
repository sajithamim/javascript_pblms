// How to find second largest value and remove first largest value in array

// Step 1: Find largest value from array.
// Step 2: Find index of largest value.
// Step 3: Delete index from array using splice method.
// step 4: Apply same logic that use for find largest value.

const intArray = [1, 8, 5, 10];
const largeValue = arr => {
  let firstLargestValue = Math.max(...arr); //Finding the first largest number
  let index = arr.indexOf(firstLargestValue); //Finding the index of first Largest number
  let deleteLargestNo = arr.splice(index, 1); //deleting the first largest number
  let secondLargestValue = Math.max(...arr); //Finding the second largest number
  return secondLargestValue;
};
console.log(largeValue(intArray));
