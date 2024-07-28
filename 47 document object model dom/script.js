//dom has 3 types of nodes
//1.text nodes
//2.element nodes
//3.comment nodes
// note :-- a text node is always a leaf of the tree

// first child , last child , and child nodes

// Element.firstchild -- first child node
// Element.lastchild -- last child node
// Element.childchild -- all child nodes

// Element.childNodes[0] === Element.firstChild // always true

//converts child nodes to array
arr = Array.from(document.body.childNodes)
console.log(arr)
