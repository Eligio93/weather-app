import { getCurrentData } from "./Api-functions";
import { createInfoObject } from "./App";
import sunriseIcon from "./sunrise.svg";
import sunsetIcon from "./sunset.svg";





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
                let weatherInfo=document.createElement("div");
                weatherInfo.id="weather-info";
                let currentCondition=document.createElement("p");
                currentCondition.id="current-condition";
                currentCondition.textContent=infoObject.condition;
                weatherInfo.appendChild(currentCondition);
                let conditionIcon=document.createElement("img");
                conditionIcon.src=infoObject.iconUrl;
                weatherInfo.appendChild(conditionIcon);
                let temperature=document.createElement("p");
                temperature.id="temp";
                temperature.textContent=infoObject["temp"+tempUnit];
                weatherInfo.appendChild(temperature);




            //     <div id="weather-info">
            //     <p id="current-condition">Storm</p>
            //     <img src="//cdn.weatherapi.com/weather/64x64/day/389.png" alt="" srcset="">                
            //     <p id="temp">35 °C</p>
            //     <div class="side-element">
            //         <p id="feels-like">Feels like 50°C</p>
            //         <img src="/src/feels-like.svg" alt="">   
            //     </div>            
            //     <p id="degrees">C° F°</p>   
            // </div>



               
                main.appendChild(locationInfo);
                main.appendChild(weatherInfo);
                document.body.appendChild(main);
            }else{
                console.log("No matching found")
            }
        }catch(error){
            console.log("Errore: "+ error);
        }


}
    //preleva la city nell'input





export {displayHome,displayInfo};

