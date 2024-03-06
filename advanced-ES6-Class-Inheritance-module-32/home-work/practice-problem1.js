// Practice Problem map(), filter(), find()

/* quesion: 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ]. Now convert this array into an even array (array with even numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become an even number. */
/* 
// option: 1;

const numbers = [1, 9, 5, 7, 9];
const evenNumbers = numbers.map((num) => {
  const even = [];
  if (num % 2 === 0) {
    even.push(num);
  } else if (num % 2 === 1) {
    const getEven = num + 1;
    even.push(getEven);
  }
  return even;
});
console.log(evenNumbers);
 */
/* 
// option:2

const numbers = [1, 3, 5, 7, 9];
const evenNumbers = numbers.map((num) => {
  return num % 2 === 0 ? num : num + 1;
});

console.log(evenNumbers);
 */
/* 
// option:3

const numbers = [1, 3, 5, 7, 9];
const evenNumbers = numbers.map((num) => (num % 2 === 0 ? num : num + 1));
console.log(evenNumbers);
 */
/* 
// option:4
const numbers = [1, 3, 5, 7, 9];

let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  const index = [i];
  const element = numbers[index];
  // console.log(index, element);
  if (element % 2 === 0) {
    evenNumbers.push(element);
  } else {
    const sum = element + 1;
    evenNumbers.push(sum);
  }
}
console.log(evenNumbers);
 */
/* quesion: 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10 using
array.filter() method. */
/* 
// option: 1
const numbers = [33, 50, 79, 78, 90, 101, 30];
const myNumber = numbers.filter((num) => num % 10 === 0);
console.log(myNumber);
 */
/* 
// option: 2
const numbers = [33, 50, 79, 78, 90, 101, 30];

let divisibleByTen = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element % 10 === 0) {
    divisibleByTen.push(element);
  }
  // console.log(element);
}
console.log(divisibleByTen);
 */

/* 
// option: 3
const numbers = [33, 50, 79, 78, 90, 101, 30];
let divisibleByTen = [];
function divisible(num) {
  for (let i = 0; i < num.length; i++) {
    const index = [i];
    const element = num[index];
    if (element % 10 === 0) {
      divisibleByTen.push(element);
    }
  }
  return divisibleByTen;
}
const result = divisible(numbers);
console.log(result);
 */

/* 
 quesion: 3) Now do the same task of question 2. But do this using array.find()
method. Then compare the output of question 2 & question 3.
*/
/* 
const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisibleByTen = numbers.find((num) => num % 10 === 0);
console.log(divisibleByTen);
 */

/* 
quesion: 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
of this array and give output. Do this using for loop &
array.reduce() method.
*/
/* 
// option: 1
const array = [1, 9, 17, 22];

let sum = 0;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  sum = sum + element;
}
console.log(sum);
 */
/* 
// option: 2
const array = [1, 9, 17, 22];
const result = array.reduce((p, c) => p + c, 0);
console.log(result);
 */
