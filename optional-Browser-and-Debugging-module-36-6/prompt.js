alert("Hello ! look at me!!!");

const alertUser = () => {
  alert("Be attentive and serious to invest time for learning");
};

const seriousStudent = () => {
  const serious = confirm(
    "Are you spending 6-8hrs every single day to learn web dev?"
  );
  //   console.log(serious);
  if (serious === true) {
    alert("Weldone! keep it up.");
  } else {
    console.log("valo hoye jao!!! kopale dokkho ache!");
  }
};

const getName = () => {
  const name = prompt("What is your name?");
  console.log(name);
};
