// Comparision operators are usually used to compare values

// == equal to  , checks if two values are equal

let a = 1;
let b = 1;
let c = a == b;
console.log(c); // output is true

let a1 = 1;
let b1 = 2;
let c1 = a1 == b1;
console.log(c1);  // output is false

// !=  not equal to , checks if two values are  not equal

let d = 2;
let e = 3;
console.log(d != e); //out put is true

let d1 = 2;
let e2 = 2;
console.log(d != e2); // output is false

// < less than , checks if first value is less than second value 

let num1 = 1;
let num2 = 2;
console.log(num1 < num2);

// > greater than , checks if first value is greater than second value 

let num3 = 3;
let num4 = 2;
console.log(num3 > num4);

// <= less than or equal , checks if first value is less than or equal to second value 

{
    let num3 = 2;
    let num4 = 2;
    console.log(num3 <= num4);
}

// >= greater than or equal , checks if first value is greater than or equal to second value 
{
    let num3 = 2;
    let num4 = 2;
    console.log(num3 >= num4);
}
// === strict equal to , checks if two values are equal and same data type

{
    let num3 = 2;
    let num4 = 2;
    console.log(num3 == num4);
}

{
    let num3 = 2;
    let num4 = '2';
    console.log(num3 === num4);
}


// !== strict not eual to , checks if two values are not equal to and not same data type

{
    let num3 = 3;
    let num4 = '2';
    console.log(num3 !== num4);
}
