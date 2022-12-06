(function() {
    "use strict";
    $(document).ready(function() {


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
    let html = "";
    for(let i = 0; i < reports.length; i += 8) {
        // should get 5 objects back
        console.log(reports[i]);
        html += "<div id='cards' class='col-md-2'>";
        html += "<p>Current temperature of " + reports[i].main.temp + "°F" + "</p>";
        html += "<p>High of " + reports[i].main.temp_max + "°F" + "</p>";
        html += "<p>Low of " + reports[i].main.temp_min + "°F" + "</p>";
        html += "</div>";

    }
    // console.log(html);
    $("#container").html(html);
});

mapboxgl.accessToken = MAPBOX_APPID;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-104.9903, 39.7392]
});

var marker = new mapboxgl.Marker({
    draggable: true,
    color: "#c71585"

})
    .setLngLat([-104.9893, 39.7372])
    .addTo(map);


// End of document ready
});
})();