// The spread operator in JavaScript, represented by three dots ..., allows for the expansion of iterable elements (such as arrays, objects, or strings) into individual elements. It is used in a variety of situations to make code more concise and expressive, particularly in function calls, array manipulation, and object literals.

//copy array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3]

// 2. Combining Arrays
// You can combine multiple arrays into one using the spread operator.

const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Output: [1, 2, 3, 4]

// 3. Adding Elements to an Array
// The spread operator can be used to add elements to the beginning or end of an array.

const numbers = [1, 2, 3];
const newNumbers = [0, ...numbers, 4];

console.log(newNumbers); // Output: [0, 1, 2, 3, 4]

// 1. Copying Objects
// The spread operator can be used to create a shallow copy of an object.
const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Output: { a: 1, b: 2 }

const numbers1 = [1, 2, 3];

function add(x, y, z) {
  return x + y + z;
}

console.log(add(...numbers1)); // Output: 6

const user = { name: 'Alice', age: 25 };
const updatedUser = { ...user, age: 26 };

console.log(updatedUser); // Output: { name: 'Alice', age: 26 }

