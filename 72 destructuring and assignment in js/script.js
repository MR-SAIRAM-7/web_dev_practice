// Destructuring assignment is a convenient way of extracting multiple values from data stored in (possibly nested) objects and arrays in JavaScript. It allows you to unpack values from arrays or properties from objects into distinct variables.

// Array destructuring lets you extract values from an array and assign them to variables in a single statement.

//const [var1, var2, ...rest] = array;

const numbers = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, third] = numbers;

console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(third);  // Output: 3

const [first_, second_, ...rest] = numbers;

console.log(rest); // Output: [3, 4, 5]

// Object destructuring lets you unpack properties from an object and assign them to variables.

//const { prop1, prop2, ...rest } = object;
const person = {
    name1: 'Alice',
    age: 25,
    job: 'Engineer'
};

// Destructuring assignment
const { name, age } = person;

console.log(name1); // Output: Alice
console.log(age);  // Output: 25

// You can also rename variables and set default values:

const { name: fullName, age1, country = 'Unknown' } = person;

console.log(fullName); // Output: Alice
console.log(country);  // Output: Unknown


const user = {
    id: 1,
    personalInfo: {
      name2: 'Bob',
      address: {
        city: 'New York',
        state: 'NY'
      }
    }
  };
  
  const {
    personalInfo: {
      name2,
      address: { city }
    }
  } = user;
  
  console.log(name2); // Output: Bob
  console.log(city); // Output: New York
  

