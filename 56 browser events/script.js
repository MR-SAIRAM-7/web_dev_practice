// let btn = document.querySelector('container')
// btn.onclick = function(){
//     alert("iam js")
// }

// addEventLister and removeEventListener
// let btn = document.querySelector('.container1')
// btn.addEventListener('click',function subjec(e){
//     alert("Hello world 1")
// })


// to remove event listener
// let rmv = prompt("Do you want to remove the event listerner y/n")
// if(rmv == 'y'){
//     btn.removeEventListener('click',subjec)
// }

// Select the button inside the div with class 'container1'
let btn = document.querySelector('.container1 button');

// Define the event handler function
function handleClick() {
    alert("Hello world 1");
}

// Add an event listener for the 'click' event on the button
btn.addEventListener('click', handleClick);

// Prompt the user to ask if they want to remove the event listener
let rmv = prompt("Do you want to remove the event listener? y/n");

// Remove the event listener if the user answers 'y'
if (rmv === 'y') {
    btn.removeEventListener('click', handleClick);
}


