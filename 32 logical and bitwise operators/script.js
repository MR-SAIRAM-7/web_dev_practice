// Logical operators

// && (logical and )== checks if two statements are true

let a = (5 > 3) && (5 > 4);
console.log(a);

// || (logical or )== checks if atleast one of two statements is true


let b = (5 > 3) || (5 < 4);
console.log(a);


//  !(logical not) == negation of ta condition

let c = (5 > 3) && (5 > 4);
let d = !c;
console.log(d);

let e = (5 > 3) || (5 < 4);
let f = !e;
console.log(f);


// bitwise operators

// these operatos are used to perform operations onb binary representation

// & (bitwise and) == this operator compares each pair of bits in two numbers and returns 1 if both bits are 1 other wise 0 

{
    let result = 5 & 3; // in binary : 0101 & 0011 = 0001
    console.log(result);
}


// | (bitwise or) == this operator compares each pair of bits in two numbers and returns 1 if atleast one of bits is 1 other wise 0 

{
    let result = 5 | 3; // in binary : 0101 & 0011 = 0001
    console.log(result);
}

// ^ (bitwise xor) == this operator compares each pair of bits in two numbers and returns 1 if exactly one of bits is 1 other wise 0 

{
    let result = 5 ^ 3; // in binary : 0101 & 0011 = 0001
    console.log(result);
}


// ~ (bitwise not) == this operator inverts flips all the bits of a number

{
    let result = ~5; // in binary : 0101 & 0011 = 0001
    console.log(result);
}

// <<  (bitwise left shidt) this operator shifts the bits of a number to the left by a specified number of positions . it effectively multiplies the number by 3 for each position shifted 

{
    let result = 5 << 2; // in binary 0101 << 2 = 10100
    console.log(result) 
}

// >> (bitwise right shift) this operator shifts the bits of a number to the right by a specified number of positions . it effectively divides the number by 2 for each position shifted 

{
    let result = 5 >> 2; // in binary 0101 >> 2 = 0010
    console.log(result) 
}