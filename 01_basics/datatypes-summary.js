/* based on how the datatype is stored, js datatypes are of 2 types :
    1. Primitive: they are call by value 
            7 types - String, Number, Boolean, null, undefined, Symbol, bigint

    2. Reference (Non-primitive): they are call by reference
            3 types - Array, Objects, Functions 

    NOTE: JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

    Also called loosely typed language. 
*/

const id1 = Symbol("12");
const id2 = Symbol("12");

console.log(id1 === id2);
// false, symbol gives uniqueness to the variables even if they are same in value and datatype

//Stack (primitive), Heap (non-primitive)
