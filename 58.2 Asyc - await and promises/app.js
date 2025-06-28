let h1 = document.querySelector("h1");

function changeColor(color, delay, nextCol) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            if (nextCol) {
                resolve("Next Color exists");
            } else {
                reject("Next color does not exists");
            }
        }, delay);
    })
}

// changeColor("red", 1000, "blue")
//     .then((result) => {
//         console.log("Color Changed to red")
//         console.log(result);
//         return changeColor("blue", 1000, "yellow");
//     })
//     .then((result) => {
//         console.log("Color Changed to yellow")
//         console.log(result);
//         return changeColor("yellow", 1000, "orange");
//     })
//     .then((result) => {
//         console.log("Color Changed to yellow")
//         console.log(result);
//         return changeColor("orange", 1000, "cyan");
//     })
//     .then((result) => {
//         console.log("Color Changed to yellow")
//         console.log(result);
//         return changeColor("cyan", 1000, "green");
//     })
//     .then((result) => {
//         console.log("Color Changed to yellow")
//         console.log(result);
//         return changeColor("green", 1000, "");
//     })
//     .catch((err) => {
//         console.log("Error Occured");
//         console.log(err);
//     })


// async function runChangeColor() {
//     await changeColor("red", 1000, "blue");
//     await changeColor("blue", 1000, "yellow");
//     await changeColor("yellow", 1000, "orange");
//     await changeColor("orange", 1000, "cyan");
//     await changeColor("cyan", 1000, "green");
//     await changeColor("green", 1000, "");
//     await changeColor("green", 1000, "");
// }
// try{
//     runChangeColor();
// }catch(err){
//     console.log("Error")
// }

async function runChangeColor() {
    try {
        let res1 = await changeColor("red", 1000, "blue");
        console.log(res1);

        let res2 = await changeColor("blue", 1000, "yellow");
        console.log(res2);

        let res3 = await changeColor("yellow", 1000, "orange");
        console.log(res3);

        let res4 = await changeColor("orange", 1000, "cyan");
        console.log(res4);

        let res5 = await changeColor("cyan", 1000, "green");
        console.log(res5);

        let res6 = await changeColor("green", 1000, "");
        console.log(res6);

    } catch (err) {
        console.log("Error:", err);
    }
}

runChangeColor();
