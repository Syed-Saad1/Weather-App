const apikey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    return;
  }
      let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "*C";
    document.querySelector(".humidity").innerHTML = data.wind.speed + "% ";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  const weatherMain = data.weather[0].main;

  if (weatherMain === "Clouds") {
    weathericon.src = "./Accets/clouds.png";
    document.body.style.backgroundImage = "url('./Accets/cloudbg.avif')";
  } else if (weatherMain === "Clear") {
    weathericon.src = "./Accets/clear.png";
    document.body.style.backgroundImage = "url('./Accets/clearbg.avif')";
  } else if (weatherMain === "Drizzle") {
    weathericon.src = "./Accets/drizzle.png";
    document.body.style.backgroundImage = "url('./Accets/drizzlebg.avif')";
  } else if (weatherMain === "Rain") {
    weathericon.src = "./Accets/rain.png";
    document.body.style.backgroundImage = "url('./Accets/rainbg.avif')";
  } else if (weatherMain === "Mist") {
    weathericon.src = "./Accets/mist.png";
    document.body.style.backgroundImage = "url('./Accets/mistbg.jpg')";
  }

}
searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
checkweather();
