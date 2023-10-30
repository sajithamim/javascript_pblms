// How to find the sum of all elements in an array

const number = [1, 5, 4, 2, 58, 55];

const sumOfEle = arr => {
  return number.reduce((pre, curr) => {
    return pre + curr;
  });
};

console.log("Sum of all elements,", sumOfEle(number));
