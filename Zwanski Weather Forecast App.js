
// Function to make a GET request to the 7Timer! API
function getWeatherForecast(city) {
    const apiUrl = `https://api.7timer.info/bin/civillight.php?lon=${city.longitude}&lat=${city.latitude}&ac=0&unit=metric&output=json`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the weather forecast data here
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

// Sample city object with latitude and longitude
const city = { latitude: 40.7128, longitude: -74.0060 };

// Call the function with the city object
getWeatherForecast(city);

