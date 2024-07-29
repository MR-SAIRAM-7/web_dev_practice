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
