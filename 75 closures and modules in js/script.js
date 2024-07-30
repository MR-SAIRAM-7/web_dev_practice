// Closures are created every time a function is created, at function creation time. They are especially powerful for data privacy and for creating function factories or module patterns.

// When a function is declared inside another function, the inner function has access to the variables of the outer function, creating a closure. This access is not limited to when the outer function is running; the inner function "remembers" the scope in which it was created, even after the outer function has returned.

function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // Accessing the outer function's variable
    }

    return innerFunction;
}

const closure = outerFunction();
closure(); // Output: I am outside!


//   Introduced in ECMAScript 2015 (ES6), the import and export syntax provides a standardized way to work with modules in JavaScript.

// math.js
export const pi = 3.14159;

export function add(a, b) {
  return a + b;
}

export class Calculator {
  multiply(a, b) {
    return a * b;
  }
}

// You can import components from a module using the import keyword.

// main.js
import { pi, add, Calculator } from './math.js';

console.log(pi); // Output: 3.14159
console.log(add(2, 3)); // Output: 5

const calculator = new Calculator();
console.log(calculator.multiply(2, 3)); // Output: 6

// You can also rename imports using the as keyword.

import { pi as circlePi, add as sum } from './math.js';

console.log(circlePi); // Output: 3.14159
console.log(sum(2, 3)); // Output: 5
