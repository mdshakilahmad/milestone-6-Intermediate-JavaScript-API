const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "mac", price: 150000 },
];

// map
const names = products.map((product) => product.name);
// console.log(names);
const prices = products.map((p) => p.price);
// console.log(prices);

// forEach
products.forEach((p) => console.log(p.id));

// filter
const expensive = products.filter((p) => p.price > 50000);
// console.log(expensive);

// find
const affordable = products.find((p) => p.price < 50000);
// console.log(affordable);

// reduce
const total = products.reduce((acum, current) => acum + current.price, 0);
// console.log(total);

// form shakil:
// s
/* 
 const result = prices.reduce((p, c) => p + c, 0);
 console.log(result);
 */
/* 
const numbers = [65000, 45000, 40000, 150000];
function extra(params) {
  let sum = 0;
  for (let i = 0; i < params.length; i++) {
    const index = i;
    const element = params[index];
    sum = sum + element;
  }
  return sum;
}
const result = extra(numbers);
console.log(result);
 */

/* let sum = 0;
for (let i = 0; i < prices.length; i++) {
  const index = i;
  const element = prices[index];
  sum = sum + element;
}
console.log(sum);
 */
