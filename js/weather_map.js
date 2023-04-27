"use strict";

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    lat: -46.65843369685495,
    lon: -23.56204194127558,
    units: 'imperial'
}).done(function(data) {
    console.log(data);
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);

});