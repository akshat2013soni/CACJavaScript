const name = "akshat";

const repoCount = 50;

//use backticks for string interpolation rather than + or , syntax

console.log(`Hello my name is ${name}, repo count is ${repoCount}`);

const gameName = new String("spider-man");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
//prototype - no need to use this everytime, we can directly use the methods in prototype
console.log(name.indexOf("a"));

const newString = gameName.substring(0, 7);
//cannot give negative values in substring but it is possible in slice
console.log(newString);
// console.log(gameName.slice(-8, 5));
// const badString = "  akshat         ";
// console.log(badString);
// console.log(badString.trim());

const url = "https://google.com/search%20bar";

// url.replace("%20", "-");
console.log(url.replace("%20", "-"));

//split

console.log(gameName.split("-"));
