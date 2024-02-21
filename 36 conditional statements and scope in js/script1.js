// To find maximum and minimum of three numbers using if-else statements


let num1 =  parseInt(prompt("Enter the First number : "));
let num2 =  parseInt(prompt("Enter the Second number : "));
let num3 =  parseInt(prompt("Enter the Third number : "));

if (num1>num2 && num1>num3) {
console.log("The  largest number is " + num1);
} 

else if(num2>num1 && num2>num3){
    console.log("The  largest number is " + num2);
}
else if(num3>num1 && num3>num2){
    console.log("The  largest number is " + num3);
}

 if(num1<num2 && num1<num3){
    console.log("The Smallest number is  "+ num1);
}
else if(num2<num1 && num2<num3){
    console.log("The Smallest number is  "+ num2);
}
else if(num3<num2 && num3<num1){
    console.log("The Smallest number is  "+ num3);
}
else{
    console.log("All are Equal");
}


