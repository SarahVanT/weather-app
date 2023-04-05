// Feature 1
function displayDateTime(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tueday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    // Selecting the ID named Date w/in index.html
    let updatingDateTime = document.querySelector("#Date");
    // Changing the #Date content:
    updatingDateTime.innerHTML = `${day} ${hours}:${minutes}`;
  }
  
  // Feature 1
  displayDateTime(new Date());
  
  // Feature 2
  function searchCity(event) {
    // prevents reloading the page and removing input on form
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let apiKey = "197ef3a642b76eef90e131866f74a0a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
    let cityInput = document.querySelector("h2");
    cityInput.innerHTML = `${searchInput.value}`;
    // calling apiURL and function showTemperatureHere
    axios.get(apiUrl).then(showTemperatureHere);
  }
  
  function showTemperatureHere(response) {
    let currentTemp = document.querySelector("#temperature");
    // selcting temp from response and rounding
    let celsiusTemp = Math.round(response.data.main.temp);
    console.log(response.data.main.temp);
    currentTemp.innerHTML = `${celsiusTemp}`;
  }
  
  function currentLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  
  function showPosition(position) {
    let apiKey = "197ef3a642b76eef90e131866f74a0a0";
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showCurrentlocation);
  }
  
  function showCurrentlocation(response) {
    let currentTemp = document.querySelector("#temperature");
    let cityInput = document.querySelector("h2");
    let location = response.data.name;
    let temp = Math.round(response.data.main.temp);
    cityInput.innerHTML = `${location}`;
    currentTemp.innerHTML = `${temp}`;
  }
  
  // Search button clicked
  let form = document.querySelector("#city-search");
  form.addEventListener("submit", searchCity);
  
  // Current location button clicked
  let location = document.querySelector("#current-location");
  location.addEventListener("click", currentLocation);
  
  // Bonus Feature
  
  function temperatureCelsius(event) {
    event.preventDefault();
    let currentDegrees = document.querySelector("#temperature");
    currentDegrees.innerHTML = -11;
  }
  
  let celsius = document.querySelector("#celsius");
  celsius.addEventListener("click", temperatureCelsius);
  
  function temperatureFahrenheit(event) {
    event.preventDefault();
    let currentDegrees = document.querySelector("#temperature");
    currentDegrees.innerHTML = 12.2;
  }
  
  let fahrenheit = document.querySelector("#fahrenheit");
  fahrenheit.addEventListener("click", temperatureFahrenheit);
  

  