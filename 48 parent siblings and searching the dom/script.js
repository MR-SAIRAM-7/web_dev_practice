// document.nextElementSibling -- next sibling of the element
//document.firstElementChild -- first element child
//document.lastElementChild -- last element child

// table = document.getElementById('myTable');
// console.log(table.rows);
// console.log(table.caption);
// console.log(table.tHead);
// console.log(table.tFoot);
// console.log(table.tBodies);
// console.log(tbody.rows);
// console.log(tr.cells);
// console.log(tr.sectionRowIndex);
// console.log(tr.rowIndex)
// console.log(td.cellIndex)

//searching the dom
let ctitle = document.getElementById("title")
ctitle.style.color = "red"

// let ctitle = document.getElementById("title").style.color = "red"

// let dtitle = document.getElementsByClassName("title-class")
// dtitle.style.color = "green"


  // Get the first element with the class name "title-class"
  let dtitle = document.getElementsByClassName("title-class");

  // Check if the collection has at least one element
  if (dtitle.length > 0) {
      // Change the color of the first element
      dtitle[0].style.color = "green";
  }

// document.querySelectorAll(".class name or #id name")
let qury = document.querySelectorAll(".qury")
qury[0].style.background = "red"
qury[1].style.background = "yellow"
qury[2].style.background = "green"
qury[3].style.background = "aqua"
qury[4].style.background = "pink"
// qury[3].style.background = "red"

// let qury = document.querySelectorAll(".qury").style.color = "black"

//document.getElementByTagName

// refer notes and mdn website
