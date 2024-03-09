const accountId = 147846;
let accountEmail = "akshat@google.com";
var accountPassword = "5455s";
//variable can also be declared directly but not recommended
accountCity = "Udaipur";
let accountState; //undefined
console.log(accountId);
//another way to print multiple things in a tabular format

/*
Prefer not to use var because of block scope and function scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity]);
