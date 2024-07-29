// the try...catch syntax allowa us to catch errors so that the script instead of dying..can do more reasonable

// try {
//     //code that could generate error
// } catch (err) {
//     // solution code for generated error
// }

// try..catch do not work with scheduled code such as settimeout
// instead we can write set time out inside the try...but not outside of try..

// example

setTimeout(() => {
    console.log("Hacking wifi....")
}, 1000);

try {
    setTimeout(() => {
        console.log("Rahul")
    }, 1000);
} catch (error) {
    console.log("Balle balle")
}
setTimeout(() => {
    console.log("Hacking wifi....")
}, 2000);

try {
    setTimeout(() => {
        console.log("Rahul")
    }, 3000);
} catch (error) {
    console.log("Balle balle")
}
setTimeout(() => {
    console.log("Hacking wifi....")
}, 3000);

try {
    setTimeout(() => {
        console.log("Rahul")
    }, 4000);
} catch (error) {
    console.log("Balle balle")
}
setTimeout(() => {
    console.log("Hacking wifi....")
}, 5000);

try {
    setTimeout(() => {
        console.log("Rahul")
    }, 6000);
} catch (error) {
    console.log("Balle balle")
}