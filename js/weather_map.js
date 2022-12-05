"use strict";


$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: API_KEY,
    q: "Denver, US",
    units: "imperial"
}).done(function(data) {
    console.log('5 day forecast', data);
});

let lat = 39.7392;
let long = -104.9903;
$.get("http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ long +"&appid=" + API_KEY + "&units=imperial").done(function(data) {
    let reports = data.list;
    for(let i = 0; i < reports.length; i += 8) {
        // should get 5 objects back
        console.log(reports[i]);
    }
});