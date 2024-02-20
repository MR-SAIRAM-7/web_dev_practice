// String Functions in js

let str = "This is a String";
console.log(str);

// Index in strings

// if you want thie position of 'is' in the above string then we use indexof() function

let position = str.indexOf('is');
console.log(position);  // gives the first occurance as output

// Note :- Index starts from 0 not 1

// To know the last index of a particular element we use lastindexof() function

let lastidx = str.lastIndexOf('is');  // gives the last occurance as output
console.log(lastidx);   // but it will not print exact accuring value but prints the preceding value in the above example the occurance of is is 6 but it will print 5

// SubString from a string 

let substr = str.slice(1, 6);
console.log(substr);

// Slice will take 2 values i.e, starting index value and ending index value and gives the values of that string as output

// another way to use slice function

console.log(str[3, 7]);


// SubString

// Subtring is also like slice but it cannot take negative values but slice can take negative values

let substr1 = str.substring(1, 6);
console.log(substr1);

// Replaced property
let _replaced = str.replace('a String', 'SaiRam');
console.log(_replaced);

// .replace is used to replace the content in a string

console.log(str.toUpperCase());
// .touppercase is used to convert the string into CAPITAL LETTERS

console.log(str.toLowerCase());
// .toLowerCase is used to convert the string into small letters


// to combine two strings we use concat property

let newstr = str.concat(" This is Sairam");
console.log(newstr);

// Trim property is used to remove white spaces from the string at ending positions of the string

let str2 = "     this contains     white   spaces          "
console.log(str2.trim());

// To get exact particular value of the string we ue chartt function

let char = str.charAt(2);
console.log(char);

// TO extract the code character of a particulsar value from the string we use charcodeat() function

let codechar = str.charCodeAt(2);
console.log(codechar);


// temp property used to combine sentences

let name1 = "Sairam";
let name2 = " is a pro coder";
let temp = `${name1} is a nice person and he${name2}`;
console.log(temp);