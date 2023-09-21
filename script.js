const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "b81d40e2c5e7a1ef879fe5b219921bc5";

const searchBox = document.querySelector("#search input");
const searchBtn = document.querySelector("#search button");
const weatherImg = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); //why&appid?
    if(response.status==404){
        document.querySelector(".error").innerHTML = "Invalid city name";
        // document.querySelector(".error")
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Kmph";

    if(data.weather[0].main=="Clouds"){
        weatherImg.src="images/clouds.png";
    }else if(data.weather[0].main=="Rain"){
        weatherImg.src="images/rain.png";
    }else if(data.weather[0].main=="Clear"){
        weatherImg.src="images/clear.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherImg.src="images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        weatherImg.src="images/mist.png";
    }
    document.querySelector(".error").style.display="none";

    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})



