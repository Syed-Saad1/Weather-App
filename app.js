const apikey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "*C";
    document.querySelector(".humidity").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "/Accets/clouds.png";
    } else if (data.weather[0].main == "clear") {
      weathericon.src = "/Accets/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "/Accets/rain.png";
    } else if (data.weather[0].main == "drizzle") {
      weathericon.src = "/Accets/drizzle.png";
    } else if (data.weather[0].main == "mist") {
      weathericon.src = "/Accets/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
checkweather();
