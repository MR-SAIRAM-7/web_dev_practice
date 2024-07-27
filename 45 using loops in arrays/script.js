// using loops in arrays

let arr = [3,54,1,2,4,45,99,100]

// for(i of arr){
//     console.log(i)
// }

//or

for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

// for each loop

// var_name.array.forEach((value,index,array => {
    
// }));

arr.forEach((element)=>{
    console.log(element*element)
})

//or

for(let i in arr){
    console.log(arr[i]**2)
}

//array.from -- used to create an array from any other object

console.log(Array.from("Harry"))

//map -- creates a new array by performing same operation for each element

let arr1 = [45,23,24]
let mp = arr1.map((value,index,array)=>{
    console.log(value,index,array)
    return value+index
})
console.log(mp)

//filter -- filters an array with values that passes a test and creates a new array

let arr2 = [45,23,21,0,3,5]
let a22 = arr.filter((a)=>{
    return a<10
})
console.log(a22)

//reduce() -- reduces an array to a single value

let arr3 = [1,2,3,5,2,1]
let newarr3 = arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr3)