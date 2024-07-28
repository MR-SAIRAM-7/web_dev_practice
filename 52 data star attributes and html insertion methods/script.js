// let id = document.querySelector("#first")
// console.log(id.dataset.game)

// Select the element with the ID 'first'
let element = document.querySelector("#first");

// Access the 'data-game' attribute using the dataset property
console.log(element.dataset.player); // Output: "harry"


// html insertion methods
let in_html = document.querySelector(".container")
in_html.innerHTML = in_html.innerHTML + "<h1>Inserted Hello world</h1>"

//to create html using js
let div = document.createElement('div')
div.innerHTML = '<h1>Iam created in js</h1>'
// in_html.append(div)
document.body.append(div)

// here are some insertion methods

// Node.append(e) -- append at the end
// Node.before(e) -- insert before node
// Node.prepend(e) -- insert at the beginning of the node
// Node.after(e) -- insert after the node
// Node.replacewith(e) -- replaces node with the given node