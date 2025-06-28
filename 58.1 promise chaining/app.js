function changeColor(color, delay, nextCol) {
    let h1 = document.querySelector("h1");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            if (nextCol) {
                resolve("Next Color exists");
            } else {
                reject("Next color does not exists");
            }
        }, delay);
    });
}

changeColor("red", 1000, "green")
    .then((result) => {
        console.log("Color changed");
        console.log(result);
        return changeColor("green", 1000, "yellow");
    })
    .then((result) => {
        console.log("Color changed");
        console.log(result);
        return changeColor("yellow", 1000, "purple");
    })
    .then((result) => {
        console.log("Color changed");
        console.log(result);
        return changeColor("purple", 1000, "blue");
    })
    .then((result) => {
        console.log("Color Changed");
        console.log(result);
        return changeColor("blue", 1000, "");
    })
    .then((result) => {
        console.log("Color Changed");
        console.log(result);
        return;
    })
    .catch((error) => {
        console.log("Error Occured");
        console.log(error);
    })