// js console object 

//1.assert() -- used to assert
// console.assert(5>53)
//error : assertion failed

console.log(console) //many functions

// console.error("This will raise a custom error")

// console.clear() -- this will clear the console

let obj = {a:1,
    b:2,
    c:3
}
console.table(obj) // creates the table of the object

// .warn() -- used to give warning message
console.warn("Hey this is warning")

//.info() -- this will give info
console.info("Hey this is info")

// refer mdn website for more information

//comparing loops using .time()

console.time("for loop")

for(let i = 0;i<5;i++){
    console.log(i)
}
console.timeEnd("for loop")

console.time("while loop")
let i= 0;
while(i<5){
    console.log(i)
    i++
}
console.timeEnd("while loop")


