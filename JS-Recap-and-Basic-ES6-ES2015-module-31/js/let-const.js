// breakup with var
// no more use of var

// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 35;
console.log(money);

const bird = "jan pakhi";
// pakhi = "moyna pakhi";
const message = bird + " potas potas";
console.log(message);

const numbers = [12, 89, 65, 45];
// reassaign is not allowed
// numbers = [77, 66, 55, 22, 99];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
  name: "mofiz",
  address: "Rongpur",
};

// student = { name: "Mofazzol" };
student.name = "Mofazzol";
console.log(student);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  //const number = numbers[i];
  var number = numbers[i];
  sum = sum + number;
  //   console.log(number);
}
// console.log(sum);
console.log(number);
