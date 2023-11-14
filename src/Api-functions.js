let getCurrentData= async function(city){
    try{
        let api="45e67828ff3b497ebb033714230111";
        let response= await fetch('https://api.weatherapi.com/v1/current.json?key='+api+'&q='+city+'&aqi=no',{mode:'cors'});
        let currentData= await response.json();
        return currentData        
    }catch(error){
        console.log("Error :"+ error)
    }
       
}
let getForecastData=async function(city){
    let api="45e67828ff3b497ebb033714230111";
    let response=await fetch('https://api.weatherapi.com/v1/forecast.json?key='+api+'&q='+city+'&days=7&aqi=no&alerts=no',{mode:'cors'});
    let forecastData=await response.json();
    return forecastData

}
export {getCurrentData, getForecastData};