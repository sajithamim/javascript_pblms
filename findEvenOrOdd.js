// how to find Even or Add number in array
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = number.filter(item => {
  return item % 2 === 0;
});
console.log("even numbers", even);

const odd = number.filter(item => {
  return item % 2 != 0;
});
console.log("odd numbers", odd);
