const number = document.getElementById("number");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

start.addEventListener("click", () => {
  let count = 0;
  const intervalId = setInterval(() => {
    // console.log(count++);
    number.innerText = ++count;
    // clearInterval(intervalId);
  }, 1000);

  stop.addEventListener("click", () => {
    //   console.log("hi");
    clearInterval(intervalId);
  });

  reset.addEventListener("click", () => {
    clearInterval(intervalId);
    number.innerText = "0";
  });

  stop.removeAttribute("disabled");
  reset.removeAttribute("disabled");
});
