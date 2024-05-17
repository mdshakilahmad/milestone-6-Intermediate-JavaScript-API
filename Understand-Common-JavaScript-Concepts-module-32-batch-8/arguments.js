// array like object
function sum(a, b, c) {
  //   console.log(arguments[1]); //array like object
  //   console.log(typeof arguments);
  /* 
  for (let i = 0; i < arguments.length; i++) {
    console.log(i, arguments[i]);
  }
   */
  //   arguments.push(45);
  const args = [...arguments];
  //   console.log(args);
  const result = a + b + c;
  return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 45, 98, 56);
// console.log(total);
console.log(sum.length);
