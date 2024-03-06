/* 

Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than emty string
4. '0' 'false'
5. {}
6. []
7. space string jemon ' '

Falsy:
1. false
2. variable value 0
3. '' (emty string)
4. undefined
5. null
*/
/* 

/*  =============================================================
                        optional
    ==============================================================
*/

// check falsy:
const y = null;
if (!y) {
  console.log("value is falsy");
}

// check truthy:
const x = { class: 9 };
if (!!x) {
  console.log("value is truthy");
}

/* 
// Falsy
const x = false;
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */

/* 
// Truthy
const x = 4;
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Truthy
const x = -4;
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */

/* 
// Falsy
const x = 0;
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */

/* 
// Truthy
const x = "solaiman";
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Falsy
const x = "";
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Truthy
const x = " ";
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Truthy
const x = "0";
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Truthy
const x = "false";
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Falsy
let x;
console.log(x);
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Falsy
let x = null;
console.log(x);
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Truthy
let x = {};
console.log(x);
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Truthy
let x = { a: 5, b: 56 };
console.log(x);
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Truthy
let x = [];
console.log(x);
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
/* 
// Truthy
let x = [5, 6];
console.log(x);
if (x) {
  console.log("value of x is truthly");
} else {
  console.log("value of x is falsy");
}
 */
