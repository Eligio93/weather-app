let getCurrentData= async function(city){
    try{
        let api="45e67828ff3b497ebb033714230111";
        let response= await fetch('http://api.weatherapi.com/v1/current.json?key='+api+'&q='+city+'&aqi=no',{mode:'cors'});
        let currentData= await response.json();
        return currentData        
    }catch(error){
        console.log("Error :"+ error)
    }
       
}
let getForecastData=async function(city){
    let api="45e67828ff3b497ebb033714230111";
    let response=fetch('http://api.weatherapi.com/v1/forecast.json?key='+api+'&q='+city+'&days=5&aqi=no&alerts=no',{mode:'cors'});
    let forecastData=await response.json();
    return forecastData

}

let getAstroData=async function(city,date){
    let api="45e67828ff3b497ebb033714230111";
    let response=fetch('http://api.weatherapi.com/v1/astronomy.json?key='+api+'&q='+city+'&dt='+date,{mode:'cors'});
    let astroData=await response.json();
    return astroData
}
export {getCurrentData, getForecastData, getAstroData};