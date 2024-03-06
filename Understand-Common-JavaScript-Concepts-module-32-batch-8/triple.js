// always use ===
// equal comparison doesn't work for non-primitive data type

/* 
const first = 2;
const second = 2;
if (first == second) {
    console.log("values are equal");
  } else {
    console.log("values are not equal");
  }
 */
/* 
const first = 2;
const second = "2";
if (first == second) {
    console.log("values are equal");
  } else {
    console.log("values are not equal");
  }
 */
/* 
const first = 2;
const second = "2";
if (first === second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
 */
/* 
const first = 2;
const second = true;
if (first === second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
 */
/* 
const first = 1;
const second = true;
if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
 */
/* 
const first = 1;
const second = false;
if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
 */
/* 
const first = 0;
const second = false;
if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
 */
/* 
const first = "0";
const second = false;
if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
} */
/* 
const first = 20;
const second = 25;
if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
 */
/* 
const first = {};
const second = {};
if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
 */
/* 
const first = { x: 5 };
const second = { x: 5 };
if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
} */
/* 
const first = [];
const second = [];
if (first === second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
 */
/* 
// equal comparison doesn't work for non-primitive data type
const first = [];
const second = first;
if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
 */

const first = [45, 54, 98];
const second = [45, 54, 98];

if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}

// type coercion
// type conversion
// type casting
