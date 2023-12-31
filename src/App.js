import { getCurrentData, getForecastData } from "./Api-functions";
import { format, getDay } from "date-fns";
import spinnerGif from "./spinner.svg"
import "./style.css";

let formatDate = function (string) {
    let year = parseInt(string.split("-")[0]);
    let month = parseInt(string.split("-")[1]) - 1;
    let day = parseInt(string.split("-")[2]);
    let dayOfWeek = getDay(new Date(year, month, day));
    let formattedDate = format(new Date(year, month, day, dayOfWeek), 'EEE d MMM y');
    return formattedDate

}

let createInfoObject = async function (city) {
    let infoObject = {};
    try {
        let currentData = await getCurrentData(city);
        let forecastData = await getForecastData(city);
        // let astroData=await getAstroData("Milan");
        if (!currentData.error) {
            //location infos
            infoObject.location = currentData.location.name;
            infoObject.region = currentData.location.region;
            infoObject.country = currentData.location.country;
            infoObject.timezone = currentData.location.tz_id;
            //time info
            infoObject.date = formatDate((currentData.location.localtime).split(" ")[0]);
            infoObject.time = (currentData.location.localtime).split(" ")[1];
            //temp info
            infoObject.tempC = Math.round(currentData.current.temp_c) + " °C";
            infoObject.tempF = Math.round(currentData.current.temp_f) + " °F";
            //weather info
            infoObject.condition = currentData.current.condition.text;
            infoObject.iconUrl = "https:" + currentData.current.condition.icon;
            infoObject.windSpeed = Math.round(currentData.current.wind_kph);
            infoObject.feelsLikeC = Math.round(currentData.current.feelslike_c) + " °C";
            infoObject.feelsLikeF = Math.round(currentData.current.feelslike_f) + " °F";
            infoObject.humidity = Math.round(currentData.current.humidity) + " %";
            //sunrise sunset
            infoObject.sunrise = forecastData.forecast.forecastday[0].astro.sunrise;
            infoObject.sunset = forecastData.forecast.forecastday[0].astro.sunset;
            //chances of rain
            infoObject.chancesOfRain = forecastData.forecast.forecastday[0].day.daily_chance_of_rain + " %";
           //forecast
            infoObject.forecast = [];
            for (let i = 1; i < forecastData.forecast.forecastday.length; i++) {
                infoObject.forecast.push({
                    day: (formatDate(forecastData.forecast.forecastday[i].date)).slice(0, 3),
                    conditionText:forecastData.forecast.forecastday[i].day.condition.text,
                    conditionIcon: "https:" + forecastData.forecast.forecastday[i].day.condition.icon,
                    maxTempC: Math.round(forecastData.forecast.forecastday[i].day.maxtemp_c) + " °C",
                    maxTempF: Math.round(forecastData.forecast.forecastday[i].day.maxtemp_f) + " °F",
                    minTempC: Math.round(forecastData.forecast.forecastday[i].day.mintemp_c) + " °C",
                    minTempF: Math.round(forecastData.forecast.forecastday[i].day.mintemp_f) + " °F"
                });
            }

            return infoObject
        } else {
            return "No matching found"
        }

    } catch (error) {
        console.log("Error: " + error);
    }



}
let loadingSpinner=function(){
    let loadingDiv=document.createElement("div");
    loadingDiv.id="loading";
    let loadingGif=document.createElement("img");
    loadingGif.src=spinnerGif;
    loadingDiv.appendChild(loadingGif);
    let loadingP=document.createElement("p");
    loadingP.textContent="Loading...";
    loadingDiv.appendChild(loadingP);
    document.body.style.padding="0";    
    document.body.appendChild(loadingDiv);
}
   




export { createInfoObject, formatDate,loadingSpinner}