import { createInfoObject} from "./App";

import sunriseIcon from "./sunrise.svg";
import sunsetIcon from "./sunset.svg";
import feelsLikeIcon from "./feels-like.svg";
import humidityIcon from "./humidity.svg"
import windIcon from "./wind.svg"
import chanceOfRainIcon from "./rain.svg"
import searchIcon from "./search.svg";





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

let displayInfo= async function(city,tempUnit){
   
        try{
            let infoObject=await createInfoObject(city);
            if(infoObject!=="No matching found"){
                document.body.innerHTML="";
                document.body.style.padding="10px 50px";
                //display time and date of the searched city
                let topDiv=document.createElement("div");
                topDiv.id="top-div";
                let div=document.createElement("div");
                let date=document.createElement("p");
                date.id="date";
                date.textContent=infoObject.date;
                div.appendChild(date);
                let time=document.createElement("p");
                time.id="time";
                time.textContent=infoObject.time;
                div.appendChild(time);
                topDiv.appendChild(div),
                document.body.appendChild(topDiv);
                let searchDiv2=document.createElement("div");
                searchDiv2.id="search-div2";
                let searchBar2=document.createElement("input");
                searchBar2.type="text";
                searchBar2.id="search-bar2";
                searchDiv2.appendChild(searchBar2);
                let searchImg=document.createElement("img");
                searchImg.src=searchIcon;
                searchImg.id="search-icon";
                searchDiv2.appendChild(searchImg);
                topDiv.appendChild(searchDiv2);
                searchImg.addEventListener("click",function(){
                    let newCity=searchBar2.value;
                    tempUnit="C";
                    if(document.getElementById("error-message")){
                        document.getElementById("error-message").remove();

                    }
                    displayInfo(newCity,tempUnit)
                })
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
                //temperature unit button
                let switchUnit=document.createElement("button");
                switchUnit.id="switch-unit";
                if(tempUnit=="C"){
                    switchUnit.textContent="Display in °F";
                }else{
                    switchUnit.textContent="Display in °C";
                }
                weatherInfo.appendChild(switchUnit);
                //handle click of the switch temperature unit
                switchUnit.addEventListener("click",function(){
                    if(tempUnit=="C"){
                        tempUnit="F";
                        displayInfo(city,tempUnit)
                    }else{
                        tempUnit="C";
                        displayInfo(city,tempUnit)
                    }
                })
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
                console.log(infoObject.forecast);
                let forecast=document.createElement("div");
                forecast.id="forecast";
                (infoObject.forecast).forEach(day=>{
                    let forecastBox=document.createElement("div");
                    forecastBox.className="forecast-box";
                    let forecastDay=document.createElement("p");
                    forecastDay.className="forecast-day";
                    forecastDay.textContent=day.day;
                    forecastBox.appendChild(forecastDay);
                    let conditionText=document.createElement("p");
                    conditionText.className="condition-text";
                    conditionText.textContent=day.conditionText;
                    forecastBox.appendChild(conditionText);
                    let forecastIcon=document.createElement("img");
                    forecastIcon.src=day.conditionIcon;
                    forecastBox.appendChild(forecastIcon);
                    let forecastTemp=document.createElement("p");
                    forecastTemp.className="forecast-temp";
                    forecastTemp.textContent=day["maxTemp"+tempUnit]+"/";;
                    let span=document.createElement("span");
                    span.textContent=day["minTemp"+tempUnit];
                    forecastTemp.appendChild(span);
                    forecastBox.appendChild(forecastTemp)
                    forecast.appendChild(forecastBox);
                })
                document.body.appendChild(forecast) 
            }else{
                console.log("No matching found");
                if(document.getElementById("search-bar")){
                    let errorMessage=document.createElement("p")
                    errorMessage.textContent="No matching location found";
                    errorMessage.style.color="white";
                    document.getElementById("search-bar").insertAdjacentElement("afterend",errorMessage);
                    document.getElementById("search-bar").value="";   
                }else{
                    if(document.getElementById("search-bar2")){
                        let errorMessage=document.createElement("p");
                        errorMessage.id="error-message";
                        errorMessage.textContent="No matching location found";
                        errorMessage.style.color="white";
                        errorMessage.style.alignSelf="self-end";
                        document.getElementById("top-div").insertAdjacentElement("afterend",errorMessage);
                        document.getElementById("search-bar2");
                      

                    }
                }
                //  return "No matching found";
            }
        }catch(error){
            console.log("Errore: "+ error);
        }


}






export {displayHome,displayInfo};

