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

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            resultBox.innerHTML = "API call successful.";
        });
});
