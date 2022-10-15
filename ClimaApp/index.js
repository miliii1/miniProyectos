const app = document.querySelector(".weather");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.querySelector(".locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelector(".city");

let cityInput = "Buenos Aires";

cities.forEarch((city) => {
    city.addEventListener('click', (e) => {
        cityInput = e.target.innerHTML;

        fetchWeatherData();

        app.style.opacity = "0";
    });
})

form.addEventListener('submit', (e) => {
    if(search.value.length == 0) {
        alert('Por favor escribe una ciudad')
    } else {
        cityInput = search.value;

        fetchWeatherData();

        search.value = "";

        app.style.opacity = "0";
    }
    e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${day}/${month}/${year}`).getDay()];
};

function fetchWeatherData() {
    fetch(`http://api.weatherapi.com
    /v1/current.json?key=e903e5e429ee44c69c1213742221510=${cityInput}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}