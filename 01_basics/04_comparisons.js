// basic comparisons

// always avoid such comparisons
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/* equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0. */

// undefined is false for all comparisons

// === strict check
console.log("2" == 2); //true
console.log("2" === 2); //false
