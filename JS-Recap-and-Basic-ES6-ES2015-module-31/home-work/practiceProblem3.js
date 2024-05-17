/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result.
 */

const squareFunc = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    const squared = number ** 2;
    // console.log(squared);
    sum = sum + squared;
  });
  return sum;
};
const numbers = [1, 2, 3, 4, 5];
const result = squareFunc(numbers);
console.log(result);

/* 
const power = 3;
[5, 2, 9]
  .map(function (data) {
    let total = 1;
    for (let n = 0; n < power; n++) {
      total = data * total;
    }
    console.log(data, "=", total);
    return total;
  })
  .reduce((current, old) => current + old, 0);
 */
