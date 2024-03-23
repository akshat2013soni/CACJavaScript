const score = 444;
// console.log(score);
// const balance = new Number(100);
// this is object and prototype of number can ne used
// console.log(balance);

// console.log(balance.toString().charAt(0));

// console.log(balance.toFixed(2)); // precision value of decimal
// const num = 123.8458;
// console.log(num.toPrecision(1));
// preference given to number before decimal, then rounds off others and express in 1e+2 format if less precision is given
// const cash = 10054700;
// console.log(cash.toLocaleString("en-IN"));
// give , seperated number as string like 1,00,54,700

/************************************MATH

E: 2.718281828459045;
LN2: 0.6931471805599453;
LN10: 2.302585092994046;
LOG2E: 1.4426950408889634;
LOG10E: 0.4342944819032518;
PI: 3.141592653589793;
SQRT1_2: 0.7071067811865476;
SQRT2: 1.4142135623730951;

These values can be used directly in Math object
*****************************************/

console.log(Math.random()); // gives values between 0 ad 1;

// to get values between fixed range a formula is given as

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// for (let index = 0; index < 1000; index++) {
//   console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// }
