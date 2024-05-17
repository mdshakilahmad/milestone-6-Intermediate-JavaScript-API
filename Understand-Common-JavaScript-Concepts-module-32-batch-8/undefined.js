/* 
//  8 ways to get undefined

1. variable that is not initialized will give undefined
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined

// kono ekta data set kora hoini okhane tahole sheta define kora hoi null diye
// to etai bojhlam ami jor kore undefined set korbo na jodi dekhate hoi kono data nei tahole null set kore dibo okhane

*/
/* 
// 1. variable that is not initialized will give undefined
let first;
console.log(first);
 */
/* 
// 2. function with no return
function second(a, b) {
  const total = a + b;
}
const result = second();
console.log(result);
 */
/* 
// 3. parameter that is not passed will be undefined
function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
third(2, 5);
 */
/* 
// 4. if return has nothing on the right side will return undefined
function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
// const total = noNegative(2, 5);
const total = noNegative(2, -5);
console.log(total);
 */
/* 
// 5. property that doesn't exists on an object will give you undefined
const fifth = { id: 2, name: "ponchom", age: 40 };
console.log(fifth.age, fifth.salary);
 */
/* 
// 6. accessing array elements outside of the index range
const sixth = [4, 89, 87, 56, 54];
console.log(sixth[1], sixth[5], sixth[200]);
 */
/* 
// 7. deleting an element inside an array
// you should not do it. Insted use splice
const sixth = [4, 89, 87, 56, 54];
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[200]);
console.log(sixth);
 */
/* 
// 8. set a value directly to undefined
// evabe dibo na kokhonoi
const eighth = undefined;
console.log(eighth);
 */
/* 
// kono ekta data set kora hoini okhane tahole sheta define kora hoi null diye
const ninth = null;
const data = { result: [], updated: null };
console.log(data);
 */
/*
// undefined er type hocche undefined
console.log(typeof undefined);
 */
/* 
// null er typoe hocche object
// null er type object ashe oneke bole eta javascript er ekta vul tobe eta fixed korte gele internet er onek kichoi broken hoye jete pare tai eta ekhono emon rekhe diyeche evabei.
console.log(typeof null);

// to etai bojhlam ami jor kore undefined set korbo na jodi dekhate hoi kono data nei tahole null set kore dibo okhane
 */
