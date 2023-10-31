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
document.addEventListener('DOMContentLoaded', function() {
    var themeSwitcher = document.getElementById("theme-switcher");
    var containerMode = document.querySelector(".mode");

    // Set default mode to light
    var mode = "light";

    // Function to toggle between dark and light modes
    function toggleMode() {
      if (themeSwitcher.checked) {
        mode= "dark" 
        }
        else{
          mode= "light"
        }
        if (mode=="dark") {
          console.log(mode)
           
            // containerMode.classList.remove("light");
            containerMode.classList.add("dark");

        } else {
          console.log(mode)
           
            containerMode.classList.remove("dark");
            // containerMode.classList.add("light");
        }
    }

    // Listen for the checkbox change event to toggle mode
    themeSwitcher.addEventListener('change', toggleMode);
});





