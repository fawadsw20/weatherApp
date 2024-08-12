
const apikey = "f994fee3fa60edd786ca53cfc8df2978";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let WeatherIcon = document.querySelector(".weather-icon");
let currentTime = new Date().getTime();

async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
        if (data.weather[0].main == "Clouds") {
            if(currentTime>=data.sys.sunrise && currentTime<data.sys.sunset) {
                WeatherIcon.src = "images/clouds.png";
            } else {
                WeatherIcon.src = "images/cloud-Night.png"
            }  
        }
        else if (data.weather[0].main == "Clear") {
            if(currentTime>=data.sys.sunrise && currentTime<data.sys.sunset) {
                WeatherIcon.src = "images/clear.png";
            } else {
                WeatherIcon.src = "images/Clear-night.png"
            } 
        }
        else if (data.weather[0].main == "Rain") {
            if(currentTime>=data.sys.sunrise && currentTime<data.sys.sunset) {
                WeatherIcon.src = "images/rain.png";
            } else {
                WeatherIcon.src = "images/rain-night.png"
            }
        }
        else if (data.weather[0].main == "Drizzle") {
            if(currentTime>=data.sys.sunrise && currentTime<data.sys.sunset) {
                WeatherIcon.src = "images/drizzle.png";
            } else {
                WeatherIcon.src = "images/drizzle-night.png"
            }
        }
        else if (data.weather[0].main == "Mist") {
            if(currentTime>=data.sys.sunrise && currentTime<data.sys.sunset) {
                WeatherIcon.src = "images/mist.png";
            } else {
                WeatherIcon.src = "images/mist-night.png"
            }
            
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
