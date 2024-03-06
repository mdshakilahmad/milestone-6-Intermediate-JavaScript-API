print5();
console.log(print10);
print10();
for (let i = 0; i < 5; i++) {
  //let er jaigai jodi var ditam tahole eta hoisting hoye opore jeto
  //   console.log(i);
}
// console.log("outside", i);

function print5() {
  console.log("inside print5", 5);
}

const print10 = function () {
  console.log("inside print10", 10);
};
