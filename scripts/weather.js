/*
  OpenWeatherMap API
  https://openweathermap.org
*/

function removeElement(idParent, id){
  var box = document.getElementById(idParent);
  var element = document.getElementById(id);
  box.removeChild(element);
}

function addElement(parentId, id, tag){
  var element = document.createElement(tag);
  var parnt = document.getElementById(parentId);
  element.setAttribute("id", id);
  // Removed function(classes,) // element.setAttribute("class", classes);
  parnt.appendChild(element);
}

function addDisplayElements(){
  addElement("weatherBlock", "temp", "h3");
  addElement("weatherBlock", "temp-btn", "button");
  document.getElementById("temp-btn").innerHTML = "°C/°F";
  document.getElementById("temp-btn").setAttribute("onclick", "changeTemp()");
  addElement("test", "weather", "h2");
  addElement("weatherBlock", "weather-city-name", "h1");
}


// Record temperature value and scale
var globalTemp = [0, "z"];
// Main function gets location and makes the api call with that info
function getWeather(){
  navigator.geolocation.getCurrentPosition(function handlePosition(position){
    var lat = position.coords.latitude
    var lon = position.coords.longitude
    var url = "https://api.openweathermap.org/data/2.5/weather?APPID=173e4430f828c864808b77b67e172f10&lat=" + lat + '&lon=' + lon + "&units=metric";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function handleRequest() {
      var weatherData = JSON.parse(xhr.responseText);
      removeElement("weatherBlock", "weather-load-warning");
      addDisplayElements();
      setIcon(weatherData.weather[0].id, weatherData.weather[0].description);
      setTemp(weatherData.main.temp);
      document.getElementById("weather-city-name").innerHTML = weatherData.name;
    }
  });
}
// Sets the weather description and Icon to the HTML
function setIcon(id, description){
  var element = document.getElementById("weather")
  switch(String(id)[0]){
    case "2":
    // Thunderstorm
      element.innerHTML = '<i class="wi wi-thunderstorm"></i>' + description;
      break;
    case "3":
    // Drizzle
      element.innerHTML = '<i class="wi wi-showers"></i>' + description;
      break;
    case "5":
    // Rain
      element.innerHTML = '<i class="wi wi-rain"></i>' + description;
      break;
    case "6":
    // Snow
      element.innerHTML = '<i class="wi wi-snow"></i>' + description;
      break;
    case "8":
      if (id == 800){
        element.innerHTML = '<i class="wi wi-day-sunny"></i>' + description + '<i class="wi wi-night-clear"></i>' ;
      } else {
        element.innerHTML = '<i class="wi wi-cloudy"></i>' + description;
      }
      break;
    default:
      element.innerHTML = description;
  }
}
// Rounds the temperature value from api call to 2 decimals
// Sets the value to display on the HTML
function setTemp(temperature){
  temperature = Math.round(temperature * 100) / 100
  globalTemp[0] = temperature;
  globalTemp[1] = "C";
  document.getElementById("temp").innerHTML = temperature + "°C";
}

// Converts between °C and °F
function changeTemp(){
  var element = document.getElementById("temp")
  switch (globalTemp[1]){
    case "C":
    var val = globalTemp[0] * 1.8 + 32
    val = Math.round(val * 100) / 100
    globalTemp[0] = val
    globalTemp[1] = "F"
    element.innerHTML = val + "°F"
    break;
    case "F":
    var val = (globalTemp[0] - 32) / 1.8
    val = Math.round(val * 100) / 100
    globalTemp[0] = val
    globalTemp[1] =  "C"
    element.innerHTML = val + "°C"
    break;
  }
}

getWeather();