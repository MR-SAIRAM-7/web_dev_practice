// a function can be made async by using "async" keyword
// async function harry(){
//    // code to be executed
// }

// async functions always returns a promise other values are wrapped in a promise automatically
// we can do something like this
// harry.then((x)=>{
//     alert(x)             or harry().then(alert)
// }) 

// the await keyword
// the await keyword makes js wait until the promise settles or returns a value ,, await only works in async functions

async function harry() {

    let delhi_weather = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching Delhi weather...");
            resolve("Delhi weather is 27°C");
        }, 2000);
    });

    let hyd_weather = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching Hyderabad weather...");
            resolve("Hyderabad weather is 27°C");
        }, 5000);
    });

    // Await the resolution of the promises
    let delhiResult = await delhi_weather;
    let hydResult = await hyd_weather;

    console.log(delhiResult);
    console.log(hydResult);

    return [delhiResult, hydResult];
}

harry().then((weather) => {
    alert(weather[0]);
    alert(weather[1]);
});

