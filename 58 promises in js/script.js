// solution to call back hell is promises

// syntax -- 
// promise = new Promise(function(resolve,reject){
//       code to be executed
// })

// resolve(value) -- if job done successfully 
// resolve(error) -- if the job fails

// promises used to complete different tasks parallely at same time
// read notes and documentation for more information

// let prom = new Promise(function (resolve, reject) {
//     alert("Hello")
//     resolve(56)
// })
// console.log("Hello one")
// setTimeout(() => {
//     console.log("Hello two in 2 seconds")
// }, 2000);
// console.log("hello three")
// console.log(prom) // returns promise object

// .then() and .catch()

// if we are only interested in successful completions we can provide only one function argument to .then()

// promise.then(function(){
// code to be executed
// }
// function(error){
//     handle
// }
// )

// if we are only interested in errors  we can provide only one function argument to
// .catch() ex -- promise.catch(error)

// Promise.finally((=>{
// is used to perfrom general cleanups
// }))

// let p1 = new Promise((resolve, reject) => {
//     console.log("Promise is pending")
//     setTimeout(() => {
//         console.log("Iam a promise and iam resolved")
//         resolve(true)
//     }, 5000);
// })

// console.log(p1)
// // to get the resolved value
// p1.then((value) => {
//     console.log(value)
// })

// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise is pending")
//     setTimeout(() => {
//         console.log("Iam a promise and iam rejected")
//         reject(new Error("Iam an error"))
//     }, 5000);
// })

// // to catch the errors
// console.log(p2)
// p2.catch((error) => {
//     console.log("Some error occured")
// })

// p2.then((value) => {
//     console.log(value)
// }).catch((error) => {
//     console.log(error)
// })

// promise chaining .then() calls

// p1.then(function(result){
//  alert(result)
//  return 2
// }).then()...up to n then chains

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolved after two seconds");
//         resolve("First promise resolved"); // Resolving the first promise
//     }, 2000);
// }).then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Promise 2 resolved");
//             resolve("Second promise resolved"); // Resolving the second promise
//         }, 2000);
//     });
// }).then((value) => {
//     console.log(value);
//     console.log("We are done");
//     return 2;
// }).then((value) => {
//     console.log("We are done almost, returned value:", value);
// });

// console.log(p3);

// example program

// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.type = 'text/javascript';
//         script.src = src;
//         document.body.appendChild(script);

//         script.onload = () => {
//             resolve("Script loaded");
//         };

//         script.onerror = () => {
//             reject("Error loading script");
//         };
//     });
// };

// Usage example:
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// attaching multiple handlers to a promise
// Promise.then(handler)
// Promise.then(handler)---------all of them runs independently
// Promise.then(handler)
// Promise.then(handler)

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(1)
//     }, 2000);
// })

// p1.then(()=>{
//     console.log("Hurray")
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(4)
//         }, 6000);
//     })
// }).then((value)=>{
//     console.log(value)
// }).then(()=>{
//     console.log("resolved")
// })

//read notes about promise api-------********************************