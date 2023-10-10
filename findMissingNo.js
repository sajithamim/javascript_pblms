// Find out missing element from the array from 1 to 10.

const arrNo = [1, 2, 4, 5, 6, 7, 9, 10];
const missArray = [];
const missingValue = arr => {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  for (i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missArray.push(i);
    }
  }
  return missArray;
};
console.log(missingValue(arrNo));
