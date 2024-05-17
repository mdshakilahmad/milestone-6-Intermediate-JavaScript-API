const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);
  if (num < 5) {
    // resolve(566665);
    resolve({ num: 566665 });
  } else {
    reject("no data available");
  }
  //   resolve(566665);
  //   reject("no data available");
});
// console.log(getData + 56);
getData
  .then((data) => console.log(data.num + 22))
  .catch((err) => console.error("ERR:", err));
