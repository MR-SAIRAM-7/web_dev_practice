const element = document.getElementById('example');
console.dir(element);

//or 
console.dir(document.getElementById('example'))

//tag name / node name
//tag name -- name of the html tags
// node name -- defined for any node text,comment etc

// inner html 
// the inner html property allows to get the html inside the elements as string
// it is only valid for element node only

console.log(document.querySelector('#first').innerHTML)

// you can also update innerhtml 
document.querySelector('#first').innerHTML = "<div>Hey this has been changed to div </div>"
//o/p---- Hey iam span Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum explicabo agnam nobis
        //placeat nesciunt ipsa in optio earum. Maxime, voluptatum voluptate.

// the outer html property contains the full html , innerhtml + the element itself
console.log(document.querySelector('#first').outerHTML)
//o/p --- <span id="first"><div>Hey this has been changed to div </div></span>

console.log(document.body.firstChild)
console.log(document.body.firstChild.nodeValue)
console.log(document.body.firstChild.textContent)

//use hidden ---- to hide html content in document
//<span id="first" hidden><div>Hey this has been changed to div </div></span>  
