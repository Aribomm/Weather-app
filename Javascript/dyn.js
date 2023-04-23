
let inputVal = document.querySelector('.searchbar.transparent');
let btn = document.querySelector('.button.transparent');
let city = document.querySelector('#city');
let date = document.querySelector('#dt');
let wind = document.querySelector('#wind');
let humidity = document.querySelector('#percipitation');
let descrip = document.querySelector('#description');
let temper = document.querySelector ('#celcius');
let icon = document.querySelector('#icon');

let weather = {
  fetchWeather: function(city) {
    fetch("http://api.weatherapi.com/v1/current.json?key=1bbdff942c944ce2b97232736232403&q=" + city + "&aqi=no")
      .then(response => response.json())
      .then(data => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data.location;
    const { text } = data.current.condition;
    const {icon} = data.current.condition;
    const { temp_c, humidity } = data.current;
    const { wind_kph } = data.current;
    const { localtime } = data.location;
    const { country } = data.location;
    console.log(name, icon, text, temp_c, humidity, wind_kph, localtime, country);
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src = "http://cdn.weatherapi.com/weather/64x64/day/113.png";
    document.querySelector(".forecast").innerText = text;
    document.querySelector(".temp").innerText = temp_c + temper + " °C";
    document.querySelector(".date").innerText = localtime;
    document.querySelector(".speed").innerText = "Wind speed: " + wind_kph + " km/h";
    document.querySelector(".humidity").innerText = "Percipitation: " + humidity + "%";
    document.querySelector(".country").innerText = country;
  },
  search: function() {
    this.fetchWeather(inputVal.value);
  }
};

// add event listener to search button
btn.addEventListener("click", () => {
  weather.search();
});



let searching = document.querySelector(".button.transparent").addEventListener("click", function() {
  weather.search();
});

let lesh = inputVal.addEventListener("keyup", function(event) {
  if (event.key == "Enter") {
    weather.search();
  }
});


