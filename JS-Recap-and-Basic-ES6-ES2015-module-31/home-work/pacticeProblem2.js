// practice problem : 2
// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

// 1. use for loop
const add = (friends) => {
  const evenFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length % 2 === 0) {
      evenFriends.push(friends[i]);
    }
  }
  return evenFriends;
};
const friends = ["jony", "nurnobi", "shohagh", "imran", "rony"];
const result = add(friends);
console.log(result);

/* 
// 2. use forof loop
const addFunc = (friends) => {
  const evenFriends = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      evenFriends.push(friend);
    }
  }
  return evenFriends;
};
const friends = ["shila", "ruma", "maya", "aivi", "aklima", "josna"];
const result = addFunc(friends);
console.log(result);
*/

// 2. use forEach
// arrow function
/* function addFunc(friends) {
  const evenFriends = [];
  friends.forEach((friend) => {
    if (friend.length % 2 === 0) {
      evenFriends.push(friend);
    }
  });
  return evenFriends;
}
const friends = ["shila", "ruma", "maya", "aivi", "aklima", "josna"];
const result = addFunc(friends);
console.log(result); */

/* 
// normal function
function addFunc(friends) {
  const evenFriends = [];
  friends.forEach(function (friend) {
    if (friend.length % 2 === 0) {
      evenFriends.push(friend);
    }
  });
  return evenFriends;
}
const friends = ["shila", "ruma", "maya", "aivi", "aklima", "josna"];
const result = addFunc(friends);
console.log(result);
 */
/* 
// 3.map
const eventFunc = (friends) => {
  const evenFriends = [];
  friends.map((friend) => {
    if (friend.length % 2 === 0) {
      evenFriends.push(friend);
    }
  });
  return evenFriends;
};
const friends = ["sammy", "bilkis", "sadi", "monjarin", "jin"];
const result = eventFunc(friends);
console.log(result);
 */

// 4. filter
/* 
const eventFunc = (friends) => {
  return [...friends].filter((friend) => friend.length % 2 === 0);
};
const friends = ["sammy", "bilkis", "sadi", "monjarin", "jin"];
const result = eventFunc(friends);
console.log(result);
 */
