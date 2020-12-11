// 1. use strict
// added in ES 5
// use this for Vanila Javascript.
"use strict";

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = "global name";
{
	let name = "seongwon";
	console.log(name);
	console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
	age = 4;
	var age;
}
console.log(age);

// 3. Constants r(read only)
// use const whenever possible.
// only use let if variable needs to change.
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Note!!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
