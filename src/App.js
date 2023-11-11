import { getAstroData, getCurrentData, getForecastData } from "./Api-functions";
import { format, getDay} from "date-fns";
let formatDate=function(string){
    let year=parseInt(string.split("-")[0]);
    let month=parseInt(string.split("-")[1])-1;
    let day=parseInt(string.split("-")[2]);
    let dayOfWeek=getDay(new Date(year, month, day));
    let formattedDate=format(new Date(year,month,day, dayOfWeek), 'EEE d MMM y');
    return formattedDate

}

let createInfoObject=async function(){
    let infoObject={};
    try{
        let currentData=await getCurrentData("Milan");
        let forecastData=await getForecastData("Milan")
        // let astroData=await getAstroData("Milan");
        if(!currentData.error){
            //location infos
            infoObject.location=currentData.location.name;
            infoObject.region=currentData.location.region;
            infoObject.country=currentData.location.country;
            infoObject.timezone=currentData.location.tz_id;
            //time info
            infoObject.date=formatDate((currentData.location.localtime).split(" ")[0]);
            infoObject.time=(currentData.location.localtime).split(" ")[1];
            //temp info
            infoObject.tempC=Math.round(currentData.current.temp_c)+" °C";
            infoObject.tempF=Math.round(currentData.current.temp_f)+" °F";
            //weather info
            infoObject.condition=currentData.current.condition.text;
            infoObject.iconUrl=(currentData.current.condition.icon).substring(2);
            infoObject.windSpeed=currentData.current.wind_kph;
            infoObject.feelsLikeC=Math.round(currentData.current.feelslike_c)+" °C";
            infoObject.feelsLikeF=Math.round(currentData.current.feelslike_f)+" °F";
            infoObject.humidity=Math.round(currentData.current.humidity)+" %";
            //sunrise sunset
            infoObject.sunrise=forecastData.forecast.forecastday[0].astro.sunrise;
            infoObject.sunset=forecastData.forecast.forecastday[0].astro.sunset;
            //chances of rain
            infoObject.chancesOfRain=forecastData.forecast.forecastday[0].day.daily_chance_of_rain + " %";
            console.log(forecastData);
            console.log(infoObject);

            return infoObject
        }else{
            return "No matching found"
        }
        
    }catch(error){
        console.log("Error: "+error);
    }
   
   

}
export {createInfoObject,formatDate}