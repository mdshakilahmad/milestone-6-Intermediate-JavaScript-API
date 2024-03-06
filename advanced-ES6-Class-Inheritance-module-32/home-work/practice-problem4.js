// Practice Problem filter()

// you have an array of objects:
/* 
// normarl function
const instractor = [
  { name: "Nodi", age: 28, positon: "Senior" },
  { name: "Akil", age: 26, positon: "Junior" },
  { name: "Sobuj", age: 30, positon: "Senior" },
];

const result = instractor.filter(function (p) {
  return p.positon === "Senior";
});
console.log(result);
 */

// arrow function
const instractor = [
  { name: "Nodi", age: 28, positon: "Senior" },
  { name: "Akil", age: 26, positon: "Junior" },
  { name: "Sobuj", age: 30, positon: "Senior" },
];

const result = instractor.filter((p) => p.positon === "Senior");
console.log(result);
