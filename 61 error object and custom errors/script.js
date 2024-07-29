//for all the built in errors , the error object has two main properties
// try {
//     heyy;//error variable not defined
// } catch (error) {
//     alert(error.name)
//     alert(error.message)
//     alert(error.stack)
// }

// throwing custom errors
// -----------------refer mdn website-----------
// age = 19
// if (age>18) {
//     throw new Error("Invalid age"); // use throw key word to throw errors
// }

try {
    let age = parseInt(prompt("Enter your age : "))
    if (age>18) {
        throw new ReferenceError("This is invalid")
    }
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
console.log("Script is still running....")

// the finally clause..
//finally always executes with try and catch
try {
    let nam = (prompt("Enter your your name  : "))
    if (nam.length == 0) {
        throw new ReferenceError("This is invalid")
    }
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
console.log("Script is still running....")