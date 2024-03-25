// array

// js array are resizable, multiple datatypes can be there

//shallow copy - same reference
//deep copy - different reference

const arr = [0, 1, true, "akshat"];
const arr2 = new Array(0, 1, 2, 3);

//array methods

// arr2.push(4);
// arr2.push(5);
// arr2.pop();

// .unshift can be used for inserting in the beginning - not optimized
// .shift is used to pop from beginning
// .indexOf gives -1 fro elements that dont exist

const newArr = arr2.join();
// converts whole array into string
console.log(newArr);

// slice, splice
const myArr = [0, 1, 2, 3, 4, 5];
//splice takes out the whole part of the array and affects the original array as well

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);
