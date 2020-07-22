// JavaScript source code
//weather app node js
//#!/usr/local/bin/node

var weather = require('weather-js');
function main() {
    weather.find({ search: 'Wixom, MI', degreeType: 'F' }, function (err, result) {
        if (err) console.log(err);
        //vars 
        let location = result[0].location.name;
        let dateYear = result[0].current.date[0] + result[0].current.date[1] + result[0].current.date[2] + result[0].current.date[3];
        let dateMonth = result[0].current.date[5] + result[0].current.date[6];
        let dateDay = result[0].current.date[8] + result[0].current.date[9];
        let currentDay = result[0].current.day;
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let currentSkies = result[0].current.skytext;
        let currentTemp = result[0].current.temperature;
        let currentFeelsLike = result[0].current.feelslike;
        let currentWindSpeed = result[0].current.windspeed;
        let currentHumidity = result[0].current.humidity + '%';
        let currentTimeHour = Number(result[0].current.observationtime[0] + result[0].current.observationtime[1]);
        let currentTimeMin = Number(result[0].current.observationtime[3].toString() + result[0].current.observationtime[4].toString());
        let currentTime;
        //sets current time
        if (currentTimeHour > 12) {
            currentTime = (currentTimeHour - 12) + ":" + currentTimeMin + " PM";
        }
        else if (currentTimeHour == 12) {
            currentTime = (currentTimeHour) + ":" + currentTimeMin + " PM";
        }
        else if (currentTimeHour == 0) {
            currentTime = (currentTimeHour + 12) + ":" + currentTimeMin + " AM";
        }
        else {
            currentTime = currentTimeHour + ":" + currentTimeMin + " AM";
        }

        function printData() {
            console.log("On " + currentDay + " " + months[dateMonth - 1] + " " + dateDay + ", " + dateYear + " at " + currentTime +":");
            console.log("Current Temperature: " + currentTemp + " degrees");
            console.log("Feels like: " + currentFeelsLike + " degrees");
            console.log("Skies: " + currentSkies);
            console.log("Windspeed: " + currentWindSpeed);
            console.log("Humidity: " + currentHumidity);
            console.log("");
        }//function to print useful info

        function printTemp() {
            console.log("Current Temperature: " + currentTemp + " degrees");
        }
        function printFeels() {
            console.log("Feels like: " + currentFeelsLike + " degrees");
        }
        function printSkies() {
            console.log("Skies: " + currentSkies);
        }
        function printWind() {
            console.log("Windspeed: " + currentWindSpeed);
        }
        function printHumid() {
            console.log("Humidity: " + currentHumidity);
        }
        function printTime() {
            console.log("At " + currentTime[0] + " " + currentTime[currentTime.length - 2] + currentTime[currentTime.length -1]);
        }

        try {
            printTemp();
            printFeels();
            console.log("");
        }
        catch{
            console.log("There was an error");
            console.log("Likely an internet outage")
            console.log("");
        }

        //printData();
    });
}// main running method

main();

