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

export {displayHome};

