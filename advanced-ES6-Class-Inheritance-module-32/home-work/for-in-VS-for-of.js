// Recommend: for in use object
/* 
 for in hocche index niye kaj kore eta moloto amra object er belai use korbo.
 tobe Array er khetre eta amra use korbo na.
 array teo use kora jabe but eta kokhonoi korbo na.
 karon array er jonno alada loop royeche jemon for loop for of loop aro ache forEach.
  */

/* 
Do not use for in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.
 */

/* 
const carector = "shakil";
for (const iterator of carector) {
    console.log(iterator);
}
*/
/* 
const carector = "shakil";
for (const key in carector) {
  if (Object.hasOwnProperty.call(carector, key)) {
    const element = carector[key];
    console.log(element);
  }
}
 */
/* 
const obj = { a: 1, b: 2, c: 3 };
for (const key in Object.keys(obj)) {
  console.log(key);
}
 */

// learn with sumit
/* 
const person = {
  fName: "shakil",
  lname: "ahmad",
  age: 24,
};

for (let x in person) {
  //   console.log(x);
  console.log(person[x]);
}

// console.log(person["fName"]);
 */

// for in use array
// recommend: Do not use for in array
const numbers = [1, 2, 12, 5, 1];
for (let number in numbers) {
  //   console.log(number);
  console.log(numbers[number]);
}
