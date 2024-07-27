// arrays are variables which can hold more than one value of diiferent data types

const fruits = ["banana","apple","grapes","papaya",true, 1,0]
//accessing values
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[4])
// console.log(fruits[5])
// console.log(fruits[6])

//or

// for(i of fruits){
//     console.log(i)
// }

//finding length of array

console.log(fruits.length)

//changing the values 
let nums = [1,2,3,4,5]
// nums[3] = 33
// console.log(nums)
console.log(typeof(nums))

// array methods
// 1.tostring() -- converts array to string
let n = [1,2,3,4,5]
n1 = n.toString()
console.log(n1)
console.log(typeof(n1))

// 2.join() -- joins all the array elements using  a seperator
let n2 = [3,4,5,6]
console.log(n2.join("_"))

//3.pop() -- removes the last elements from the array
console.log(n2.pop())
// pop() -- updates the original array and returns the popped value

//4.push() -- adds a new element at the end of the array returns a new array length
n3 = n2.push(1)
console.log(n3)

//5.shift() -- removes the first element and returns it
console.log(n2.shift())

//6.unshift() -- adds elements to the beginning and returns the new array length

console.log(n2.unshift(10))

//7.splice() -- array elements can be deleted of given indes using the delete operator

let d = [7, 8, 9, 10];
let removed = d.splice(1,1);
console.log(removed); // Outputs: [8]
console.log(d);       // Outputs: [7, 9, 10]

//8.concat() -- used to combine arrays

let a1 = [1,2,4]
let a2 = [4,5,6]
let a3 = [7,8,9]
let c = a1.concat(a2,a3)
console.log(c)

//9.sort() -- is used to sort an array alphabetically

let a = [9,8,7]
a.sort()
console.log(a)

let y = [551,22,3,14,15,26,77,88,98,100,]
y.sort()
console.log(y)

//10.splice() -- splice can be used to add new items to an array
//splice(position to add elements , no.of elements to remove from the existing position , elements to be added in the array)

const numbers = [1,2,3,4,5]
numbers.splice(2,1,23,24)
console.log(numbers)

//11.slice(starting value , ending value) -- slices out a piece from an array it creates a new array

const num = [1,2,3,4]
let z = num.slice(2)
console.log(z)

//12.reverse() -- reverse the elements in the source array

let numb = [1,2,3,4,5,6,7,8,9,0]
console.log(numb.reverse())
