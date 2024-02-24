// in js array is like a list of values you can store multiple pieces of data (numbers, strings, or even other arrays) in a single variable think of it as a numbered collection of items

let fruits = ["Apple", "Banana", "Orange", "Grapes"];
console.log(fruits);

// another way to declare  array in JavaScript is using the Array() constructor function


let newfruits = ["Apple", "Banana", "Orange", "Grapes"];
console.log(newfruits);

// length() function is used to find the length of an array

// console.log(fruits.length());
// console.log(newfruits.length()); // see in console of webpage

// sort is used to arrange the items in alphabetical order

console.log(fruits.sort());
console.log(newfruits.sort());

// to add any content in a existing array we use  push() method

fruits.push("Kiwi" , "coconut");
console.log(fruits);


// objects in js

let person = {

    name : "SaiRam",
    age : "19",
    city : "Hyderabad",
    college : "kprit"
};

console.log(person);

// in js an object is like a container that can hold related pieces of information . its similar to dictionary or a collection of key : value pairs each piece of data is stored under a label (proprty) that you can use to access it

// using objects to get specified information

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.college);