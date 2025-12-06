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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
     
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
            const desc = data.weather[0].description;

            resultBox.innerHTML =
                "Temperature: " + temp + "°C<br>" +
                "Description: " + desc;
        });
});