// If - else conditions in js
//scope in js

let y =  25;
console.log(y); // y is accessible here 
{
    let x = 10;
    console.log(x);  // x is accessible here 
}

{
    console.log(y); // y is accessible here
    //console.log(x); // x is not accesible here
}

// This is because x is block scoped and y is global scoped 
// x is accesible inside its block but y can be accessed anywhere in the program

// if - else statements

// if else are used to execute a particular block of code or perform a particular task if given condition is true

let x = 2;
let z =5;

if(x<z){
    console.log("True"); //  executes if 'if' condition is true
}
else{
    console.log("False"); // otherwise this will execute
}

// like we can have n number of else if condtions