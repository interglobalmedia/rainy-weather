// Make rain with rainyday.js
function run() {
                var image = document.getElementById('rain');
                image.onload = function() {
                    var engine = new RainyDay({
                        image: this
                    });
                    engine.rain([ [1, 2, 8000] ]);
                    engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
                };
                image.crossOrigin = 'anonymous';
                image.src = 'img/100_2473calmlg.jpg';
            }

// Make image full height of window no matter what size
$(document).ready(function () {
    "use strict";

    var topoffset = 50;
    var image = document.getElementById('rain');
    var wheight = $(window).height();

    $('.fullheight').css('height', wheight);

    $('#rain img').each(function() {
        var imgSrc = $(this).attr('src');
        $(this).parent().css({'background-image': 'url('+imgSrc+')'});
        $(this).remove();
    });

    $(window).resize(function() {
        var wheight = $(window).height();
        $('.fullheight').css('height', wheight);
    });
});

// Open Weather Map API 

// Step 1.
     // Clicking button makes AJAX call for the city we put in the input


     // step 2.
     // Modify processData to output information to the HTML page*/


  function processData(data) {
    console.log(data);

    // Print out the city name
    console.log(data.name);
    $("#name").html(data.name);
    // Print out the weather description
    console.log(data.weather[0].description);
    $("#weather").html(data.weather[0].description);
    // print out temperature
    console.log(data.main.temp);
    $("#temp").html(data.main.temp);
    // print out the humidity
    console.log(data.main.humidity);
    // print out the wind
    console.log(data.wind.speed);
    console.log(data.wind.deg);
    console.log(data.wind.gust);
    // print out sys
    console.log(data.sys.type);

    console.log(data.id);
    console.log(data.name);
    console.log(data.cod);

    // Coordinates

    console.log(data.coord.lon + ", " + data.coord.lat);
    $("#coords").html(data.coord.lon + ", " + data,coord.lat);
     $("#icon").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
  }

  function getData() {
    // Get the city  from the textbox
    var city = $("#city").val();
    // Get the data from the openweathermap
    $.getJSON('http://api.openweathermap.org/data/2.5/weather',
      {
        appid: "7da60b5cf0ec35fbc6bf413b3c760ac6",
        q: city,
        units: "imperial" //farenheit/imperial units
      },
      processData);
  }

