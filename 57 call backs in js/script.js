// synchronous programming
// let name1 = prompt("Enter your name")
// console.log(name1)

// asynchronous programming

// console.log("Start")
// setTimeout(() => {
//     console.log("I will run after 3 seconds")
// }, 3000);
// console.log("End")

// //call functions -- a call back function is a function passes into another function inside the outer function to complete an action

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//         callback(script);
//     };
//     document.head.append(script);
// }
// now we can do something like this 
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", (script) => {
//     alert("Script loaded");
//     alert(script.src);
// });

// handling errors 

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => {
//         callback(null, script);
//     };

//     script.onerror = () => {
//         callback(new Error('Script load error'), script);
//     };

//     document.head.append(script);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function(error, script) {
//     if (error) {
//         alert("Error occurred");
//     } else {
//         alert("Script loaded");

//     }
// });

// call backs

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", goodmorning)

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    
    script.onload = function () {
        console.log("Script loaded with src: " + src);
        callback(null, src); // Call the callback with null error
    };

    script.onerror = function () {
        console.error("Error loading script with src: " + src);
        callback(new Error("Src got some error")); // Call the callback with error
    };

    document.head.appendChild(script);
}

function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    alert("Hello world " + src);
}

function goodmorning(error, src) {
    if (error) {
        console.log(error);
        sendmsg(); // This function needs to be defined somewhere
        return;
    }
    alert('Good morning ' + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", goodmorning);
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello);


// call back hell and the pyramid of doom ------ read notes and documentation



