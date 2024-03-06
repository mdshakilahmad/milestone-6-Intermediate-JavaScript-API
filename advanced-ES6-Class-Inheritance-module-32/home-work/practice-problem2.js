// Practice Problem reduce()
/* 
1) Quesion: 1
const people = [
    {name: "Mena", age:20},
    {name: "Rina", age:15},
    {name: "Suchorita", age:22},
];
Challenging Follow above array of objects. So, you have 3 objects as array element. Can you find out the total sum from here? 20 + 15 + 22 = 57 . The output will be 57
What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
Practice Problem reduce()
 */
/* 
// option: 1
const people = [
  { name: "Mena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

let sumAge = 0;
for (let index = 0; index < people.length; index++) {
  const element = people[index];
  const age = element.age;
  sumAge = sumAge + age;
}

console.log(sumAge);
 */
/*
// option: 2 
const people = [
  { name: "Mena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

const sumAge = people.reduce((p, c) => p + c.age, 0);
console.log(sumAge);
 */
