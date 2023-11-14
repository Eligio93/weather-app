import { displayInfo, displayHome } from "./UI";

displayHome();
let searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click",function (event) {
    event.preventDefault();
    let city = document.getElementById("search-bar").value;
    let defaultUnit = "C";
    displayInfo(city,defaultUnit)
});


