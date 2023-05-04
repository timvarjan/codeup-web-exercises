
"use strict";
let map;
let marker = new mapboxgl.Marker();

//========================LOAD MAP ========================//
mapboxgl.accessToken = MAPBOX_KEY;
map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/timvarjan/clh7zb8tz00am01r67a1z5cce',
    center: [-46.65829362199493, -23.56193052544553],
    zoom: 5,
});

//========================PAGE LOAD FUNCTION START ========================//

// 1. marker to my location on page load
map.on("load", function () {
    marker.setLngLat([-46.65829362199493, -23.56193052544553]).addTo(map);


// 2. when page loads auto shows the forecast for 5 days at the location
$.get("https://api.openweathermap.org/data/2.5/forecast", {
    APPID: OPEN_WEATHER_APPID,
    q: "São Paulo, BR",
    units: "imperial",
}).done(function (data) {
    // 3. clear the previous weather data
    $("#weather").empty();


    //4.  loop to display forecast information for current location on page load
    for (let i = 0; i < 40; i += 8) {
        console.log(data.list[i])
        $('#weather').append("<div class='weatherCards'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +
            "<p>" + "Min " + Math.floor(data.list[i].main.temp_min) + " °F" + " / " + "Max " + Math.floor(data.list[i].main.temp_max) + " °F" + "</p>" +
            "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" +
            "<hr class='HR'>" +
            "<p>Description: " + data.list[i].weather[0].description + "<hr class='HR'>" +
            "<p>Humidity: " + data.list[i].main.humidity + "%" + "<hr class='HR'>" +
            "<p>Wind: " + data.list[i].wind.speed + " mph" + "<hr class='HR'>" + "</p>" +
            "<p>Pressure: " + data.list[i].main.pressure + " (inHg)" + "</p>")
    }
});

//========================PAGE LOAD FUNCTION END ========================//

//========================CLICK ON MAP FUNCTION START ========================//
// 1. handle the map click event for when click on another location it updates
map.on('click', function(click) {
    // set the marker position to the clicked location
    marker.setLngLat(click.lngLat).addTo(map);

    // 2. get the weather data for the clicked location
    $.get("https://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat: click.lngLat.lat,
        lon: click.lngLat.lng,
        units: "imperial"
    }).done(function (data) {
        // clear the previous weather data
        $("#weather").empty();

        // 3. loop to display forecast information for clicked location
        for (let i = 0; i < 40; i += 8) {
            $('#weather').append("<div class='weatherCards'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +
                "<p>" + "Min " + Math.floor(data.list[i].main.temp_min) + " °F" + " / " + "Max " + Math.floor(data.list[i].main.temp_max) + " °F" + "</p>" +
                "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" +
                "<hr class='HR'>" +
                "<p>Description: " + data.list[i].weather[0].description + "</p>" +
                "<p>Humidity: " + data.list[i].main.humidity + "%" + "<hr class='HR'>" +
                "<p>Wind: " + data.list[i].wind.speed + " mph" + "<hr class='HR'>" + "</p>" +
                "<p>Pressure: " + data.list[i].main.pressure + " (inHg)" + "</p>")
        }
    });
});
    //========================CLICK ON MAP FUNCTION END ========================//



    //========================SEARCH BAR FUNCTION START ========================//
//1. function to have the geocoder update the map when searched location
        document.getElementById("search-btn").addEventListener("click", geocoder);

        function geocoder() {
            let location = document.getElementById('search-box').value;

            // 2. use the Mapbox Geocoding API to get the latitude and longitude of the location
            $.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + location + ".json", {
                access_token: MAPBOX_KEY,
            }).done(function (data) {
                // get the latitude and longitude from the response
                let lng = data.features[0].center[0];
                let lat = data.features[0].center[1];

                //3. set the map center and marker location to the latitude and longitude
                map.setCenter([lng, lat]);
                marker.setLngLat([lng, lat]);


            });
        }

        $("#search-btn").click(function () {
            let searchQuery = $("#search-box").val();
            if (searchQuery.length > 0) {
                // use the mapbox to get the coordinates of the location
                $.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + searchQuery + ".json", {
                    access_token: MAPBOX_KEY,
                    type: "place",
                    limit: 1
                }).done(function (data) {
                    // get the coordinates of the location from the Mapbox Geocoding API response
                    let longitude = data.features[0].center[0];
                    let latitude = data.features[0].center[1];

                    // set the map center and marker location to the new location
                    map.setCenter([longitude, latitude]);
                    marker.setLngLat([longitude, latitude]).addTo(map);


                    // use the OpenWeather API to get the forecast for the new location
                    $.get("https://api.openweathermap.org/data/2.5/forecast", {
                        APPID: OPEN_WEATHER_APPID,
                        lat: latitude,
                        lon: longitude,
                        units: "imperial"
                    }).done(function (data) {
                        // clear the previous weather data
                        $("#weather").empty();

                        //    // 3. loop to display forecast information for SEARCHED location
                        for (let i = 0; i < 40; i += 8) {
                            $('#weather').append("<div class='weatherCards'><p class='date'>" + data.list[i].dt_txt.substring(0, 10) + "</p>" +
                                "<p>" + "Min " + Math.floor(data.list[i].main.temp_min) + " °F" + " / " + "Max " + Math.floor(data.list[i].main.temp_max) + " °F" + "</p>" +
                                "<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'>" +
                                "<hr class='HR'>" +
                                "<p>Description: " + data.list[i].weather[0].description + "</p>" +
                                "<p>Humidity: " + data.list[i].main.humidity + "%" + "<hr class='HR'>" +
                                "<p>Wind: " + data.list[i].wind.speed + " mph" + "<hr class='HR'>" + "</p>" +
                                "<p>Pressure: " + data.list[i].main.pressure + " (inHg)" + "</p>")
                        }

                    });

                });
            }
        });
    //========================SEARCH BAR FUNCTION END ========================//
    });

//========================END OF JS FILE========================//







