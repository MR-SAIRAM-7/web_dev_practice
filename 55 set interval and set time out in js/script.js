//set interval and set time out
//syntax of set time out
// let tm = setTimeout(function, <delay>, arg1, arg2){
//     returns a timer id
// }

// let a = setTimeout(function(){
//     alert("I will run after 5 seconds")

// }, 5000);

// let b = prompt("Do you want to run settimeout y/n : ")
// if(b=='n'){
//     clearTimeout(a)
// }

const sum = (a,b) =>{
    console.log("yes iam running")
    alert(a+b)
    return a+b
}
setTimeout(sum,5000,1,2) // it will run after 5 seconds

// clear time out is used to cancel the execution
