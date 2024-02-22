// Switch case in js

// "swith" statement is a way to make decisions in your code based on the value of a variable. it is like having a list of choices and depending on the value of your variable , you execute different pieces of code

// syntax of switch case



// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// simple calculator using switch

let num1 = parseFloat(prompt("Enter first Number : "));

let operator = prompt("Enter the Operator + , - , * , /");

let num2 = parseFloat(prompt("Enter second Number : "));


switch (operator) {
    case "+":
        console.log("The value of num1+num2 is " + (num1 + num2));
        break;
    case "-":
        console.log("The value of num1-num2 is " + (num1 - num2));
        break;
    case "*":
        console.log("The value of num1*num2 is " + (num1 * num2));
        break;
    case "/":
        if (num2 == "0") {
            console.log("Error! Division by zero is not possible");
        }
        else {
            console.log("The value of num1/num2 is " + (num1 / num2));
        }
        break;

    default:
        console.log("Invalid Operator");
        break;
}