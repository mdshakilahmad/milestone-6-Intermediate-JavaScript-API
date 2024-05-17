const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "dell", price: 45000 },
  { id: 3, name: "hp", price: 40000 },
  { id: 4, name: "mac", price: 150000 },
];

// has some  propertices, method
class Product {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product("le le lenovo");
// console.log(lenovo);
// lenovo.speak("oba kita kou");

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  lecture() {
    console.log("Sir is teaching Math");
  }
}

const tapon = new Teacher("Tapon sir", "physics");
console.log(tapon);

const rashid = new Teacher("Rashid", "English");
console.log(rashid);
