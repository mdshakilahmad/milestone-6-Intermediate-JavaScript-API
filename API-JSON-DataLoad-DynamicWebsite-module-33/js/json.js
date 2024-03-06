const user = { id: 1, name: "gorib amir", job: "actor" };
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/*
{ id: 1, name: 'gorib amir', job: 'actor' }
{"id":1,"name":"gorib amir","job":"actor"}
 */

const shop = {
  owner: "alia",
  address: {
    street: "kochukhet voot er goli",
    city: "ranbir",
    country: "BD",
  },
  product: ["laptop", "mic", "monitor", "kyeboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};

console.log(shop);

const shopJson = JSON.stringify(shop);
console.log(shopJson);

const shopObject = JSON.parse(shopJson);
console.log(shopObject);
