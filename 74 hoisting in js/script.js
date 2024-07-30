// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope (either the global scope or the function scope) during the compile phase, before the code is executed

// When using var, the variable declaration is hoisted to the top of its scope, but the initialization remains in place. If a var variable is used before its declaration, it will be undefined.

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// Variables declared with let and const are also hoisted, but they are not initialized until the parser reaches the line of code where they are defined. This leads to a "temporal dead zone" (TDZ) where the variables exist but cannot be accessed.

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;

// Function declarations are fully hoisted, meaning both the function's name and its definition are moved to the top of their scope. As a result, you can call a function before its declaration in the code.

console.log(add(2, 3)); // Output: 5

function add(a, b) {
  return a + b;
}

// Function expressions and arrow functions are not hoisted in the same way as function declarations. If they are assigned to a var variable, the variable is hoisted but is initialized to undefined. If they are assigned to let or const, they fall into the temporal dead zone.

console.log(subtract(5, 2)); // TypeError: subtract is not a function

var subtract = function(a, b) {
  return a - b;
};

console.log(multiply(2, 3)); // ReferenceError: Cannot access 'multiply' before initialization

const multiply = (a, b) => a * b;
