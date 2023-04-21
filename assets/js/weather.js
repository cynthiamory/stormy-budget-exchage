var Key = '&appid=a1ec931801edba790d250fdbb6c616d7';

var inputElement = document.querySelector('.Entry');
var searchBtnElement = document.querySelector('.search-button');
var citiesListElement = document.querySelector(".list");

var city = localStorage.getItem('cityNameStore');

var Weatherurl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + '&units=imperial' + Key;

var forecasturl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + '&units=imperial' + Key;

function Citydata() {
    localStorage.setItem('cityNameStore', inputElement.value);
}

for (var i = 0; i < localStorage.length; i++) {
    $(".list").append("<p>" + localStorage.getItem(localStorage.key(i)) + "</p>");
}

$.ajax ({
    url: Weatherurl,
    method: "GET"
})
    .then(function(response) {

        $('.cityname').html("<h2>" + response.name + "</h2>");
        $('.symbol').html("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' >");
        $('.breeze').text("Wind Speed: " + response.wind.speed + " MPH");
        $('.humidity').text("Humidity: " + response.main.humidity + "%");
        $(".degree").text("Degree: " + response.main.temp + " F");

        var latitude = response.coord.lat;
        var longitude = response.coord.lon;
        var URLUV = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + Key;

        $.ajax ({
            url: URLUV,
            method: "GET"
        })
            .then(function(response) {
                var uvInput = response.value

                $('.UV').text("UV: " + response.value);
                $('.UV').css("background-color", Color(uvInput));
            });
        })

function Color(uvInput, colorbgd) {
    var colorbgd = "";
    if (uvInput <= 2) {
        colorbgd = "green";
    }
    else if (uvInput <= 5 && uvInput > 2) {
        colorbgd = "yellow";
    }
    else if (uvInput >= 6 && uvInput > 5) {
        colorbgd = "red";
    }
    return colorbgd;
}

var currentDay = moment().format("dddd, D MMMM ");

function date() {
    $(".Date").text(currentDay);
};
date();

$.ajax ({
    url: forecasturl,
    method: "GET"
})

.then(function (response) {

    var One = moment(response.list[0].dt_txt).format("ddd, MMM D");

        $(".day-1-degree").text("Temp: " + response.list[0].main.temp + " F");
        $(".day-1-Date").html("<h6>" + One + "</h6>");
        $(".day-1-symbol").html("<img src='https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-1-humidity").text("Humidity: " + response.list[0].main.humidity + "%");

    var Two = moment(response.list[8].dt_txt).format("ddd, MMM D");
        $(".day-2-degree").text("Temp: " + response.list[8].main.temp + " F");
        $(".day-2-Date").html("<h6>" + Two + "</h6>");
        $(".day-2-symbol").html("<img src='https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-2-humidity").text("Humidity: " + response.list[8].main.humidity + "%");

    var Three = moment(response.list[16].dt_txt).format("ddd, MMM D");
        $(".day-3-degree").text("Temp: " + response.list[16].main.temp + " F");
        $(".day-3-Date").html("<h6>" + Three + "</h6>");
        $(".day-3-symbol").html("<img src='https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-3-humidity").text("Humidity: " + response.list[16].main.humidity + "%");

    var Four = moment(response.list[24].dt_txt).format("ddd, MMM D");
        $(".day-4-degree").text("Temp: " + response.list[24].main.temp + " F");
        $(".day-4-Date").html("<h6>" + Four + "</h6>");
        $(".day-4-symbol").html("<img src='https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-4-humidity").text("Humidity: " + response.list[24].main.humidity + "%");

    var Five = moment(response.list[32].dt_txt).format("ddd, MMM D");
        $(".day-5-degree").text("Temp: " + response.list[32].main.temp + " F");
        $(".day-5-Date").html("<h6>" + Five + "</h6>");
        $(".day-5-symbol").html("<img src='https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png' alt='Icon depicting current weather.'>");
        $(".day-5-humidity").text("Humidity: " + response.list[32].main.humidity + "%");

    });

    searchBtnElement.addEventListener('click', Citydata);
