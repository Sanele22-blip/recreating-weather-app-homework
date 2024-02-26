function updateWeather(response){
let temperatureElement = document.querySelector("#tempo");
let tempo = response.data.temperature.current;
let cityElement= document.querySelector("#cities");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let windSpeedElement = document.querySelector("#wind-speed");
let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);
let iconElement = document.querySelector("#icon");


cityElement.innerHTML = response.data.city;
temperatureElement.innerHTML=Math.round(tempo);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
timeElement.innerHTML= formatDate(date);
iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

}

function formatDate(date){
  let minutes = date.getMinutes();
  let hours = date.getHours();

let days = ["Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
]
let day = days[date.getDay()];

if (minutes < 10) {
  minutes = `0${minutes}`;
}

return `${day} ${hours};${minutes}`;
}

function searchCity(city){
let apiKey = "064ofbb2d300a269643bc6a58ft6b1a1";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(updateWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-input-id");
    
    searchCity(searchInput.value);
   
  }
  
  let searchFormElement = document.querySelector("#search-form-id");
  searchFormElement.addEventListener("submit", handleSearchSubmit);
  
  searchCity("Silverstone");