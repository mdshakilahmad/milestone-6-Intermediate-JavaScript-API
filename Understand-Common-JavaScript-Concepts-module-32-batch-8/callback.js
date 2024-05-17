function greeting(greetingHandler, name) {
  // console.log(greetingHandler());
  greetingHandler(name);
}
// const name = "halim mama";
// const number = [45, 54, 78];
// const laptop = { price: 45000, brand: "lenovo", memory: "8gb" };

function greetingHandler(name) {
  console.log("good morning", name);
}

function greetEvening(name) {
  console.log("good Evening", name);
}

function greetNight(name) {
  console.log("good night", name);
}

greeting(greetingHandler, "Tom Hanks");
greeting(greetingHandler, "Tom Brady");
greeting(greetingHandler, "Tom Cruise");
greeting(greetEvening, "Tom Solaiman");
greeting(greetEvening, "Tom Salam");
greeting(greetNight, "Rasel");
/* 
document.getElementById("btn-submit").addEventListener("click", function () {
  console.log("submit button clicked");
}); */

/* 
function submitHandler() {
  console.log("submit button clicked");
}
document.getElementById("btn-submit").addEventListener("click", submitHandler);
 */
