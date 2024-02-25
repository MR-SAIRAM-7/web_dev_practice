// functions in js
// in js a function is like a resuable block of code that you can define and give a name , you can call or invoke the function whenever you want and it will execute the code inside it.Functions are a way to organize your code and make it more manageable

// types of functions 
// 1. named functions

function greet(name){
    console.log(name + " is a good boy");
}

let name1 =  "Harry";
let name2 = "shubam";
let name3 = "rohan";
let name4 = "sagar";
let name5  = "sairam";

greet(name1)
greet(name2)
greet(name3)
greet(name4)
greet(name5)


// anonymous function
// an anonymous function without a name its often used in situations where you need a function temporarily

let add = function(x,y){
    return x+y;
}

let result = add(5,3);
console.log(result);

// Arrow function
// an arrow function is a more conciseway to write functions in es6 (ecma script 6) they are often used for simple functions 

const square = (x) => x*x;
console.log(square(7));

// function with default parameters 
// you can define a function parameters which are used when a value isn't provided

function get(name = "Guest"){

    console.log("Hello  "+ name + "! ");
}

// get() // hello guest! no value passed means it will print default value 
get("Sairam"); // hello sairam

let nice = (name) => {console.log("Hey "+ name + " you are nice");}
 nice("sairam")
 nice("praveen")
 nice("hemanth")
 nice("afnan")
 nice("sanjay")
