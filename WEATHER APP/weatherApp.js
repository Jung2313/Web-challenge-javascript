const temperatureWeather = document.querySelector(".temperature")
const inputCity = document.querySelector(".buscar")
const cityWeather = document.querySelector(".city")
const searchLupa = document.querySelector(".search-icon")
const humidity = document.querySelector(".weatherHumidity")
const windSpeed = document.querySelector(".windspeed")
const weatherImg = document.querySelector(".weather-icon")
const weatherDescri = document.querySelector(".weather-descri")
const container= document.querySelector(".content")
const error = document.querySelector(".error")

searchLupa.addEventListener("click", () => {
    fetchData()
    inputCity.value = ""
    
})

const fetchData = async () => {
    try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=metric&appid=582542bdd206f92fc6c0c4366333ab3c`)
        const data = await resp.json()
        container.style.display ="block"
        weatherImg.src= `images/${(data.weather[0].main)}.png`;
        weatherDescri.textContent= data.weather[0].main
        cityWeather.textContent = `${data.name}, ${data.sys.country}`;
        temperatureWeather.textContent = `${parseInt(data.main.temp)}°C`
        humidity.textContent = `${data.main.humidity}%`
        windSpeed.textContent = `${data.wind.speed} km/h`
        error.textContent=""
    }
    catch {
       error.textContent="Error enter a valid city"
       container.style.display ="none"
    }

}

