const PI = 3.14; 
if (true) {
	const PI = 4.561234;
	console.log(PI);
}
console.log(PI);

What is the difference between var and let?
var = reassign & declare, can access a hoisted variable
let = cannot reassign & declare, creates block scope

What is the difference between var and const?
const you cannot reassign and declare, var you can
const creates a block scope

What is the difference between let and const?
let = reassign
const = you cannot

What is hoisting?
variables are "lifted" to the top of the scope they are declared in.
function declarations can be hoisted