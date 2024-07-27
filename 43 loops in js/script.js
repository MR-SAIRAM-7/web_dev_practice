// loops are used to perform a task multiple times 
// types of loops in js
// 1.for loop
// 2.for in loop
// 3.for of loop
// 4.while loop
// 5. do-while loop

// for loop
// for(statement1;statement2;statement3){
    // 
// }


// for(i=0;i<10;i++){
//     console.log(i + " This will print 10 times")
// }

// write a program for sum of n natural numbers

// let num = parseInt(prompt("Enter the number : "))
// let sum = 0
// for(i=0;i<=num;i++){
//     sum +=i
// }

// alert(`The sum of first ${num} natural numbers is ${sum}`)


//write a program to find factorial of a number

// const n = parseInt(prompt("Enter the number you want the factorial of: "), 10);
// let multiply = 1;
// for (let i = n; i >= 1; i--) {
//   multiply *= i;
// }
// alert(`The factorial of ${n} is ${multiply}`);

// for in loop

// for(key in object){
//     //code to be executed
// }

// let obj = {
//     sairam : 100,
//     subash : 200,
//     ravi : 300,
//     saiteja : 400,
//     umar : 500
// }

// for(let key in obj){
//     console.log(`Marks of ${key} is ${obj[key]}`)
// }

// for of loop

// for(variable of  iterable){
//     //code
// }

// for(j of "Sairamisagoodboy"){
//     console.log(j)
// }
// for(j in "Sairamisagoodboy"){
//     console.log(j)
// }

// while loop

// while(condition){
//     //code to executed
// }

// let n1 = parseInt(prompt("Enter the value of n : "))
// let k = 0
// while(k<n1){
//     console.log(k)
//     k++;
// }

// the do-while loop

// do{
//     // code to be executed

// }while(condition)

let n3 = parseInt(prompt("Enter the value of n : "))
let l = 0
do{
    console.log(l)
    l++
}while(l<n3)


