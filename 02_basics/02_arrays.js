const marvel = ["Ironman", "Thor", "Spiderman"];
const dc = ["superman", "batman", "joker"];

// marvel.push(dc);
// console.log(marvel);
// inserts the arrray inside the other array

// const heroes = marvel.concat(dc);
// console.log(heroes);

// concat merges and creates new array
// spread operator
const all_heroes = [...marvel, ...dc];
console.log(all_heroes);

const nums = [1, 2, [3, 4, 5], 6, 7, [8, 9, [2]]];
// for creating array of arrays or nodes to flat array
const simple_nums = nums.flat(Infinity);
console.log(simple_nums);

console.log(Array.of(marvel, dc)); // to create array of elements
console.log(Array.from("nums")); // to create array from strings, objects
