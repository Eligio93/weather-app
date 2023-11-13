import { getAstroData, getCurrentData, getForecastData } from "./Api-functions";
import { format, getDay } from "date-fns";
let formatDate = function (string) {
    let year = parseInt(string.split("-")[0]);
    let month = parseInt(string.split("-")[1]) - 1;
    let day = parseInt(string.split("-")[2]);
    let dayOfWeek = getDay(new Date(year, month, day));
    let formattedDate = format(new Date(year, month, day, dayOfWeek), 'EEE d MMM y');
    return formattedDate

}

let createInfoObject = async function () {
    let infoObject = {};
    try {
        let currentData = await getCurrentData("Conversano");
        let forecastData = await getForecastData("Conversano");
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
            console.log(forecastData.forecast.forecastday);
            infoObject.forecast = [];

            for (let i = 1; i < forecastData.forecast.forecastday.length; i++) {
                infoObject.forecast.push({
                    day: (formatDate(forecastData.forecast.forecastday[i].date)).slice(0, 3),
                    conditionText:forecastData.forecast.forecastday[i].day.condition.text,
                    conditionIcon: "https:" + forecastData.forecast.forecastday[i].day.condition.icon,
                    maxTempC: forecastData.forecast.forecastday[i].day.maxtemp_c + " °C",
                    maxTempF: forecastData.forecast.forecastday[i].day.maxtemp_f + " °F",
                    minTempC: forecastData.forecast.forecastday[i].day.mintemp_c + " °C",
                    minTempF: forecastData.forecast.forecastday[i].day.mintemp_f + " °F"
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
export { createInfoObject, formatDate }