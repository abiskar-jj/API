// OpenWeatherMap API key
const apiKey = "e59e000761da2e0447d96d54df8bdc28";

const button = document.getElementById("getWeatherBtn");
const resultBox = document.getElementById("weatherResult");

button.addEventListener("click", function () {
    
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        resultBox.innerHTML = "Please type a city name.";
        return;
    }
    // url of web app
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     
    // fetch 
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.cod === "404") {
                resultBox.innerHTML = "City not found.";
                return;
            }

            const temp = data.main.temp;
            const feelsLike = data.main.feels_like;
            const desc = data.weather[0].description;

            
            resultBox.innerHTML =
                "<strong>Weather in " + city + "</strong><br>" +
                "Temperature: " + temp + "°C<br>" +
                "Feels Like: " + feelsLike + "°C<br>" +
                "Description: " + desc;
                
        })
        .catch(function() {
            resultBox.innerHTML = "There was a network error. Please try again.";
        });
        
});