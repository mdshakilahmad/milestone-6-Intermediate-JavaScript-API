// programming shikho commuinity: youtube channel
/* 
const first = (a, b) => {
  //   console.log(a + b);
  setTimeout(() => {
    console.log(a + b);
  }, 2000);
};

const second = () => {
  console.log("second-2");
};

first(6, 6);
second();
 */

// callback Function
const first = (a, b, callback) => {
  //   console.log(a + b);
  setTimeout(() => {
    console.log(a + b);
    callback();
  }, 2000);
};

const second = () => {
  console.log("second-2");
};

first(6, 6, second);
