// local storage is a web storage object which are not sent to the server with each request
// data surives a full refresh and even a full browser restart

// methods of local storage
// setItem(key,value) -- stores iten as key/value pair
// getItem(key,value) -- get the value by key
// removeItem(key) -- remove the with its value
// clear() -- clears everything
// Key(index) -- get the key on a given position
// length -- no.of stored items

// we can get and set values like an object
// localStorage.one = 1
// console.log((localStorage.one))
// delete localStorage.one

// note :---- both key and value must be strings 
// we can use json methods to store objects in local storage

// JSON.stringify(object) -- converts object to string
// JSON.parse(string) -- converts string to object

// localStorage.setItem("name","harry")

// let key = prompt("Enter key : ")
// let value = prompt("Enter the value : ")
// localStorage.setItem(key,value)
// console.log(`key is ${key} is ${localStorage.getItem(key)}`)
// console.log(`value is ${value}`)
// console.log(`value is ${value} is ${localStorage.getItem(value)}`)
// let clr = prompt("do you want to clear the local storage y/n : ")
// if (clr=='y') {
//     localStorage.clear() 
//     console.log("Local storage is cleared")   
// } else {
//     console.log("Local storage is not cleared")
// }

// session storage
//same as local storage 
// sessionStorage.setItem(key,value)
//-----------refer mdn and notes------------
//we can listen the onstorage event of window which is triggered when updates are made to some storage 
// window.onstorage = (e)=>{
//     alert("changed")
//     console.log(e)
// }

