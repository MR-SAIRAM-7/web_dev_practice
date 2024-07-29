//cookies in js
// cookies are small strings of data stored directly in the browser
// document.cookie provide access to cookies


// writing a cookie
document.cookie = "user = sairam"
document.cookie = "user = sairam2" // updates the name 
document.cookie = "name = harry"
document.cookie = "age = 18"
document.cookie = "mobile = 12344"

console.log(document.cookie)
// alert(document.cookie)

// encode uri component 
// with the help this you can write or set special characters !@#$$^%$%& as cookie

// document.cookie = encodeURIComponent(key)+'='+encodeURIComponent(value)

// Prompt the user for a key and a value
let key = prompt("Enter your key: ");
let value = prompt("Enter your value: ");

// Set the cookie with the key and value, using encodeURIComponent to properly encode the key and value
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);

// Decode the encoded key
let dec = decodeURIComponent(key);
console.log(dec);

//cookie options
// ---------------refer mdn --------------
