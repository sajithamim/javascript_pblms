// find Maximum and MInimum element from an array
const arrayNum = [1, 5, 8, 4, 560];

const maxFn = arr => {
  return arr.reduce(function (pre, cur) {
    return pre > cur ? pre : cur;
  });
};

// const minFn = arr => {
//   return arr.reduce(function (pre, cur) {
//     return pre < cur ? pre : cur;
//   });
// };
console.log(maxFn(arrayNum));
