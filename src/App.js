import { getCurrentData } from "./Api-functions";
import { format } from "date-fns";
let formatDate=function(string){
    let year=string.split("-")[0];
    let month=string.split("-")[1];
    let day=string.split("-")[2];

}

let getcurrentObject=async function(){
    let currentObject={};
    try{
        let data=await getCurrentData("Milan");
        if(!data.error){
            currentObject.location=data.location.name;
            currentObject.region=data.location.region;
            currentObject.country=data.location.country;
            currentObject.timezone=data.location.tz_id;
            currentObject.date=(data.location.localtime).split(" ")[0];
            currentObject.time=(data.location.localtime).split(" ")[1];
            currentObject.tempC=data.current.temp_c;
            currentObject.tempF=data.current.temp_f;
            currentObject.condition=data.current.condition.text;
            currentObject.iconUrl=(data.current.condition.icon).substring(2);
            currentObject.windSpeed=data.current.wind_kph;
            currentObject.feelsLikeC=data.current.feelslike_c;
            currentObject.feelsLikeF=data.current.feelslike_f;


            return currentObject
        }else{
            return "No matching found"
        }
        
    }catch(error){
        console.log("Error: "+error);
    }
   
   

}
export {getcurrentObject}