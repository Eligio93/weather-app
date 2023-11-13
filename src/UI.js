import { getCurrentData } from "./Api-functions";
import { createInfoObject } from "./App";
import sunriseIcon from "./sunrise.svg";
import sunsetIcon from "./sunset.svg";
import feelsLikeIcon from "./feels-like.svg";
import humidityIcon from "./humidity.svg"
import windIcon from "./wind.svg"
import chanceOfRainIcon from "./rain.svg"





let displayHome= function(){
    let form=document.createElement("form");
    form.id="form";
    let searchBar=document.createElement("input");
    searchBar.id="search-bar";
    searchBar.placeholder="Search City, Region, Country";
    searchBar.type="text";
    let searchBtn=document.createElement("button");
    searchBtn.id="search-btn";
    searchBtn.textContent="Search";
    form.appendChild(searchBar);
    form.appendChild(searchBtn);
    document.body.appendChild(form);
}

let displayInfo= async function(tempUnit){
        try{
            let infoObject=await createInfoObject();
            if(infoObject!=="No matching found"){
                //display time and date of the searched city
                let topDiv=document.createElement("div");
                topDiv.id="top-div";
                let date=document.createElement("p");
                date.id="date";
                date.textContent=infoObject.date;
                topDiv.appendChild(date);
                let time=document.createElement("p");
                time.id="time";
                time.textContent=infoObject.time;
                topDiv.appendChild(time);
                document.body.appendChild(topDiv);
                let main=document.createElement("div");
                main.id="main";
                //display city info
                let locationInfo=document.createElement("div");
                locationInfo.id="location-info";
                let cityName=document.createElement("p");
                cityName.id="city-name";
                cityName.textContent=infoObject.location;
                locationInfo.appendChild(cityName);
                let cityRegion=document.createElement("p");
                cityRegion.id="city-region";
                cityRegion.textContent=infoObject.region;
                locationInfo.appendChild(cityRegion);
                let cityCountry=document.createElement("p");
                cityCountry.id="city-country";
                cityCountry.textContent=infoObject.country;
                locationInfo.appendChild(cityCountry);
                let timeZone=document.createElement("p");
                timeZone.id="time-zone";
                timeZone.textContent=infoObject.timezone;
                locationInfo.appendChild(timeZone);
                //sunrise
                let sunrise=document.createElement("div");
                sunrise.id="sunrise";
                let sunriseImg=document.createElement("img");
                sunriseImg.src=sunriseIcon;
                sunrise.appendChild(sunriseImg);
                let sunriseTime=document.createElement("p");
                sunriseTime.id="sunrise-time";
                sunriseTime.textContent="Sun rises at: "+infoObject.sunrise;
                sunrise.appendChild(sunriseTime);
                locationInfo.appendChild(sunrise);
                //sunset
                let sunset=document.createElement("div");
                sunset.id="sunset";
                let sunsetImg=document.createElement("img");
                sunsetImg.src=sunsetIcon;
                sunset.appendChild(sunsetImg);
                let sunsetTime=document.createElement("p");
                sunsetTime.id="sunset-time";
                sunsetTime.textContent="Sun rises at: "+infoObject.sunset;
                sunset.appendChild(sunsetTime);
                locationInfo.appendChild(sunset);
                //weather info
                let weatherInfo=document.createElement("div");
                weatherInfo.id="weather-info";
                let currentCondition=document.createElement("p");
                currentCondition.id="current-condition";
                currentCondition.textContent=infoObject.condition;
                weatherInfo.appendChild(currentCondition);
                let conditionIcon=document.createElement("img");
                conditionIcon.src=infoObject.iconUrl;
                weatherInfo.appendChild(conditionIcon);
                //temperature
                let temperature=document.createElement("p");
                temperature.id="temp";
                temperature.textContent=infoObject["temp"+tempUnit];
                weatherInfo.appendChild(temperature);
                //weather parameters
                //feels like
                let weatherParameters=document.createElement("div");
                weatherParameters.id="weather-parameters";
                let paraElement1=document.createElement("div");
                paraElement1.className="para-element";
                let feelsLikeImg=document.createElement("img");
               feelsLikeImg.src=feelsLikeIcon;
                paraElement1.appendChild(feelsLikeImg);
                let paraDescription1=document.createElement("div");
                paraDescription1.className="para-description";
                let p1=document.createElement("p");
                p1.textContent="Feels Like";
                paraDescription1.appendChild(p1);
                let p1Value=document.createElement("p");
                p1Value.id="feels-like";
                p1Value.textContent=infoObject["feelsLike"+tempUnit];
                paraDescription1.appendChild(p1Value);
                paraElement1.appendChild(paraDescription1);
                weatherParameters.appendChild(paraElement1);
                //humidity               
                let paraElement2=document.createElement("div");
                paraElement2.className="para-element";
                let humidityImg=document.createElement("img");
                humidityImg.src=humidityIcon;
                paraElement2.appendChild(humidityImg);
                let paraDescription2=document.createElement("div");
                paraDescription2.className="para-description";
                let p2=document.createElement("p");
                p2.textContent="Humidity";
                paraDescription2.appendChild(p2);
                let p2Value=document.createElement("p");
                p2Value.id="humidity";
                p2Value.textContent=infoObject.humidity;
                paraDescription2.appendChild(p2Value);
                paraElement2.appendChild(paraDescription2);
                weatherParameters.appendChild(paraElement2);
                //wind speed
                let paraElement3=document.createElement("div");
                paraElement3.className="para-element";
                let windImg=document.createElement("img");
                windImg.src=windIcon;
                paraElement3.appendChild(windImg);
                let paraDescription3=document.createElement("div");
                paraDescription3.className="para-description";
                let p3=document.createElement("p");
                p3.textContent="Wind Speed";
                paraDescription3.appendChild(p3);
                let p3Value=document.createElement("p");
                p3Value.id="wind-speed";
                p3Value.textContent=infoObject.windSpeed + " Km/h";
                paraDescription3.appendChild(p3Value);
                paraElement3.appendChild(paraDescription3);
                weatherParameters.appendChild(paraElement3);
                //chances of rain
                let paraElement4=document.createElement("div");
                paraElement4.className="para-element";
                let chanceOfRainImg=document.createElement("img");
                chanceOfRainImg.src=chanceOfRainIcon;
                paraElement4.appendChild(chanceOfRainImg);
                let paraDescription4=document.createElement("div");
                paraDescription4.className="para-description";
                let p4=document.createElement("p");
                p4.textContent="Chance of rain";
                paraDescription4.appendChild(p4);
                let p4Value=document.createElement("p");
                p4Value.id="chance-rain";
                p4Value.textContent=infoObject.chancesOfRain;
                paraDescription4.appendChild(p4Value);
                paraElement4.appendChild(paraDescription4);
                weatherParameters.appendChild(paraElement4);







               
                main.appendChild(locationInfo);
                main.appendChild(weatherInfo);
                document.body.appendChild(main);
                document.body.appendChild(weatherParameters);
            }else{
                console.log("No matching found")
            }
        }catch(error){
            console.log("Errore: "+ error);
        }


}
    //preleva la city nell'input





export {displayHome,displayInfo};

