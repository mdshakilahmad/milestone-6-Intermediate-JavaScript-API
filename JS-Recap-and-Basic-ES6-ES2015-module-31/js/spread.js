const max = Math.max(12, 85, 999, 78);
// console.log(max);

const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);
/* 
const numbers2 = numbers;
numbers.push(55);
numbers2.push(77);
console.log(numbers);
console.log(numbers2);
 */

const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(77);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [444, 78, ...numbers, 111, 33];
console.log(numbers4);

// pororamming shikho comunity :
/* let anotherArray = [100, 200, 300];
let arr1 = [10, 20, 30];

let arr2 = [...anotherArray, 40, 50, 60, ...arr1];

// let arr3 = arr1;
// console.log(arr3);

console.log(arr2);
 */
/* 
let arr1 = [5, 6, 9, 8];
function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
// console.log(sum(arr1, 20, 30, 50));
console.log(sum(...arr1));

let arr4 = [44, 50, 66, 42];
// const new = [...arr4]
const min = Math.min(...arr4);
console.log(min);
 */

let a = [1, 2, 3];
console.log(Math.min(...a));
