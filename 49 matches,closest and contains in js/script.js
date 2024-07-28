//1.elem.matches(css) -- to check if element matches the given css selector
// Assume 'div' is a reference to a DOM element
const div = document.querySelector('div'); // or any specific selector

// Check if the 'div' element has the class 'box'
if (div.matches('.box')) {
    console.log('The div element has the class "box".');
} else {
    console.log('The div element does not have the class "box".');
}

// const div1 = document.querySelector('div');
// if (div.matches('#box1')) {
//     console.log('The div element has the class "box".');
//   } else {
//     console.log('The div element does not have the class "box".');
//   }

const box1 = document.querySelector('#box1');

if (box1.matches('.box')) {
    console.log('The div element has the class "box".');
} else {
    console.log('The div element does not have the class "box".');
}

//or
console.log(document.querySelector('#box1').matches(".box"))

console.log(document.querySelector('.class1').closest(".id"))
console.log(document.querySelector('#id1').closest(".class1"))
//returns the object of the html

//elem.contains(elemB) -- returns true if elemB is inside elemA or when elemA == elemB

// console.log(document.querySelector('.class1').contains(".id"))
// console.log(document.querySelector('.class1').contains("#id1"))


// Select the parent element with the class 'class1'
const parentElement = document.querySelector('.class1');

// Select the child element with the id 'id1'
const childElement = document.querySelector('#id1');

// Check if the parent element contains the child element
if (parentElement.contains(childElement)) {
  console.log('The element with the class "class1" contains the element with the ID "id1".');
} else {
  console.log('The element with the class "class1" does not contain the element with the ID "id1".');
}


