/* Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result.
 */

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9];

const finalArray = [...array1, ...array2];
// console.log(finalArray);
const math = Math.max(...finalArray);
console.log(math);
