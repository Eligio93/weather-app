import { getCurrentData } from "./Api-functions";
import { createInfoObject } from "./App";


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
                document.body.appendChild(topDiv)
            }
        }catch(error){
            console.log("Errore: "+ error);
        }


}
    //preleva la city nell'input





export {displayHome,displayInfo};

