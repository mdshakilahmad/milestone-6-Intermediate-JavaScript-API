const fish = {
  name: "King Hilsha",
  address: "Chandpur",
  color: "Silver",
  phone: "01981421103",
  price: 4000,
};

// const phone = fish.phone;

// console.log(fish.phone);
// console.log(fish.phone);
// console.log(fish.phone);

/* console.log(phone);
console.log(phone); */
/* 
const { phone, address } = fish;
console.log(phone, address); */

const { age, name } = { name: "Almas", age: 56, profession: "makeup artist" };
console.log(age, name);

const { address } = fish;
console.log(address);

// Array Destructuring :
const [first, anothers] = [44, 99, 88, 456];
console.log(first, anothers);

const nayoks = ["sakib", "bappi", "raj"];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames() {
  return ["Amlim", "Halim"];
}

// console.log(getNames());
const [baba, chacha] = getNames();
console.log(chacha, baba);
