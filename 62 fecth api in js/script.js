//fetch is used to get data over the net work 
// let promise = fetch(url,[options]) without options a get request is sent
// getting is a 2 stage process
// 1.status -- http code 404,200,500 etc
// ok -- boolean,true, if http code is 200 to 299
// after that we need to call another method to access the body in different formats
// response.text -- read and return text --- we can use only one methos text or json but not both
// respose.json -- parse the response in json
// other methods include response.formData(),response.blob(),response.Buffer() etc


// Make a fetch request to the weather API
fetch("https://goweather.herokuapp.com/weather/Ny")
    .then((response) => {
        // Log the response status and other details
        console.log('Status:', response.status); // e.g., 200 for OK
        console.log('Response OK:', response.ok); // true if the response was successful
        console.log('Headers:', response.headers);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response body as JSON
        return response.json();
    })
    .then((data) => {
        // Log the data from the JSON response
        console.log('Weather Data:', data);
    })
    .catch((error) => {
        // Handle errors that occurred during the fetch or response processing
        console.error('Fetch error:', error);
    });

// request headers 
// request headers are available in response.headers

// let res = fetch(url,{
//     headers:{
//         authentication:'secret'
//     }
// })

//sending post request


const url = 'https://example.com/api'; // Replace with your actual URL

// Use an async function to handle the fetch request
async function postData() {
    try {
        // Make a POST request with fetch
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                "a": "harry" // Convert the body to a JSON string
            })
        });

        // Check if the response is OK
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        let result = await res.json();

        console.log(result);

    } catch (error) {
        // Handle any errors
        console.error('Fetch error:', error);
    }
}

// Call the async function
postData();

