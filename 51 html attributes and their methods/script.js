let a = document.querySelector("#first")
let b = a.getAttribute("class")
console.log(b)

//elem.getAttribute(name) -- is used to get the value of an attribute

console.log(a.hasAttribute("class"))
console.log(a.hasAttribute("style"))

//elem.hasAttribute(name) -- method to check for the existence of an attribute

a.setAttribute("hidden" , "true")
//elem.setAttribute(name , value) -- method used to set the value of an attribute

a.setAttribute("class" , "true sach")
// true sach to the html is updated

//elem.removeAttribute is(name) -- method to remove the attribute from the elem

a.removeAttribute("class") // class is removed in the html

//elem.attributes -- method to get the collection of all attributes

console.log(a.attributes)