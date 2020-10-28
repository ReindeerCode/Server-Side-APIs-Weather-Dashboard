$(document).ready( function() {

  $("#find-city").on("click", function(event){
    event.preventDefault();
    let city = $("#city-search").val();
    $("#city-search").val("")
    findWeather(city)
    })
    

    function findWeather(city) {

    // This is my API key
    let APIKey = "d685b7587c7c3a2cdab61107aff768ba";
    
    // Here we are building the URL we need to query the database
    let currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?" +
      city + APIKey;
    
    let forecastURL = "https://api.openweathermap.org/data/2.5/weather?" +
    city + APIKey;



    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: currentWeatherURL,
      method: "GET"
      success: function(response){}
    })
      // store all of the retrieved data inside of an object called "response"
      .then(function(response) {
        console.log(currentWeatherURL);
        console.log(response);
    
        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        
        // Convert the temp to fahrenheit
        let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    
        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
    
        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
      });

    }

}

