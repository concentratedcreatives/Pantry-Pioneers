var recipeList = document.querySelector("ul");
var searchButton = document.getElementById("searchButton");
var searchBar = document.getElementById("searchBar");

function getApi(event) {
  event.preventDefault();
  var searchedIng = document.getElementById("searchBar").value;
  var requestUrl =
    "https://api.edamam.com/api/recipes/v2?type=public&app_id=6ea07f97&app_key=bdc6918f9a087784e70607e12f2591ab&q=" +
    searchedIng +
    "&ingr=5";

  console.log(searchedIng);
  console.log(requestUrl);

  searchButton.addEventListener("click", getApi);
}
var themeSwitcher = document.querySelector("#theme-switcher");
var containerMode = document.querySelector(".mode");

// Set default mode to dark
var mode = "light";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "light") {
    mode = "dark";
    containerMode.setAttribute("class", "dark");
  }
  // If mode is light, apply dark background 
  else {
    mode = "light";
    containerMode.setAttribute("class", "light");
  }
});



