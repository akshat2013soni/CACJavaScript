let score = 23;

console.log(score);
console.log(typeof score);

let scoreInNumber = Number(score);
console.log(scoreInNumber);

console.log(typeof scoreInNumber);

score = "342s";
scoreInNumber = Number(score);
console.log(scoreInNumber);

console.log(typeof scoreInNumber);
//undefined is NaN, null will convert to 0, boolean to 0/1
// "33" - 33
// "33asad" - NaN
// true - 1

let isLoggedIn = 1;
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn);
console.log(typeof boolIsLoggedIn);

// 1 - true, 0 - false
// "" - false
// "name" - true

let num = 445;
let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);

// *******************Operations*****************//
let value = 8;
let negValue = -value; //-8

// 2**3 = 8 (power)
// 2%3 = 2 (mod)

// "1" + 2 = 12 string preference
// 1 + "2" = 12 string preference
// "1"+2+2 = 122 string preference
// 1+2+"2" = 32 integer preference

console.log(+true); // 1 -converted to int
console.log(+""); // 0 -converted to int

let counter = 100;
console.log(counter);
counter++; // used and then incremented
++counter; // incremented and then used
