var recipeList = document.querySelector("ul");
var searchButton = document.getElementById("searchButton");
var searchBar = document.getElementById("ingredients");

function getApi(event) {
  event.preventDefault();
  var searchedIng = searchBar.value;
  var requestUrl =
    "https://api.edamam.com/api/recipes/v2?type=public&app_id=6ea07f97&app_key=bdc6918f9a087784e70607e12f2591ab&q=" +
    searchedIng +
    "&ingr=5&dishType=Biscuits%20and%20cookies&dishType=Bread&dishType=Cereals&dishType=Condiments%20and%20sauces&dishType=Desserts&dishType=Main%20course&dishType=Pancake&dishType=Preps&dishType=Preserve&dishType=Salad&dishType=Sandwiches&dishType=Side%20dish&dishType=Soup&dishType=Starter&dishType=Sweets";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(searchedIng);
      console.log(requestUrl);

      var recipe1 = document.getElementById("recipe1");
      var recipe1URL = data.hits[0].recipe.images.REGULAR.url;
      var recipe1cap = document.getElementById("recipe1cap");
      recipe1.setAttribute("src", recipe1URL);
      recipe1cap.innerHTML = data.hits[0].recipe.label;

      var recipe2 = document.getElementById("recipe2");
      var recipe2URL = data.hits[1].recipe.images.REGULAR.url;
      var recipe2cap = document.getElementById("recipe2cap");
      recipe2.setAttribute("src", recipe2URL);
      recipe2cap.innerHTML = data.hits[1].recipe.label;

      var recipe3 = document.getElementById("recipe3");
      var recipe3URL = data.hits[2].recipe.images.REGULAR.url;
      var recipe3cap = document.getElementById("recipe3cap");
      recipe3.setAttribute("src", recipe3URL);
      recipe3cap.innerHTML = data.hits[2].recipe.label;

      var recipe4 = document.getElementById("recipe4");
      var recipe4URL = data.hits[3].recipe.images.REGULAR.url;
      var recipe4cap = document.getElementById("recipe4cap");
      recipe4.setAttribute("src", recipe4URL);
      recipe4cap.innerHTML = data.hits[3].recipe.label;

      var recipe5 = document.getElementById("recipe5");
      var recipe5URL = data.hits[4].recipe.images.REGULAR.url;
      var recipe5cap = document.getElementById("recipe5cap");
      recipe5.setAttribute("src", recipe5URL);
      recipe5cap.innerHTML = data.hits[4].recipe.label;

      var recipe6 = document.getElementById("recipe6");
      var recipe6URL = data.hits[5].recipe.images.REGULAR.url;
      var recipe6cap = document.getElementById("recipe6cap");
      recipe6.setAttribute("src", recipe6URL);
      recipe6cap.innerHTML = data.hits[5].recipe.label;
    });
    fetchSecondApi();
}

function fetchSecondApi() {
  var apiKey = "1"; // Test API key
  var secondApiUrl = "https://www.thecocktaildb.com/api/json/v1/" + apiKey + "/random.php";

  fetch(secondApiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Second API response: ", data);

      // Extract data from the second API response
      var cocktailName = data.drinks[0].strDrink;
      var cocktailImageURL = data.drinks[0].strDrinkThumb; // Use the correct image URL field

      // Update the HTML elements with the cocktail name and image
      var cocktailNameElement = document.getElementById("cocktailName");
      cocktailNameElement.textContent = "Cocktail Name: " + cocktailName;

      var cocktailImageElement = document.getElementById("cocktail-Image");
      cocktailImageElement.src = cocktailImageURL;

      // Show the cocktail section
      var cocktailSection = document.getElementById("cocktail-section");
      cocktailSection.style.display = "block";

    })
    .catch(function (error) {
      console.error("Error fetching second API: ", error);
    });
}



document.addEventListener('DOMContentLoaded', function() {
    var themeSwitcher = document.getElementById("theme-switcher");
    var containerMode = document.querySelector(".mode");

    var mode = "light";

    function toggleMode() {
      if (themeSwitcher.checked) {
        mode= "dark" 
        }
        else{
          mode= "light"
        }
        if (mode=="dark") {
          console.log(mode)
            containerMode.classList.add("dark");
        } else {
          console.log(mode)
            containerMode.classList.remove("dark");
        }
    }
    themeSwitcher.addEventListener('change', toggleMode);
});



searchButton.addEventListener("click", getApi);
searchButton.addEventListener("click", storeIngredient);

function storeIngredient(event) {
  event.preventDefault();
  var ingredientList = document.getElementById("ingredient-list");
  var searchBar = document.getElementById("ingredients");
  var trimmedIngredient = searchBar.value.trim();
  var searchedIngredients = trimmedIngredient.split(" ");

  if (searchedIngredients.length === 0) {
    alert("Please enter at least one ingredient.");
    return;
  }

  var ingredients = JSON.parse(localStorage.getItem("ingredients")) || [];
  ingredients = ingredients.concat(searchedIngredients);

  //removes oldest if array >8 ingredients
  if (ingredients.length > 8) {
    ingredients = ingredients.slice(ingredients.length - 8);
  }
  ingredientList.innerHTML = "";
  ingredients.forEach(function (ingredient) {
    var button = document.createElement("button");
    button.textContent = ingredient;
    ingredientList.appendChild(button);
    //make search history buttons clickable
    button.addEventListener("click", function () {
      searchBar.value = ingredient;
      getApi(event);
    });
  });

  //stores searched cities in local storage
  localStorage.setItem("ingredients", JSON.stringify(ingredients));
  //clear search bar after search
  searchBar.value = "";
  console.log(ingredients);
}

//clears local storage on refresh
window.onbeforeunload = function (e) {
  localStorage.clear();
};

































































document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the search button
  document.getElementById('searchButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting (if it's a form)

    // Show the card panels
    const cardPanels = document.querySelectorAll('.card-panel.hoverable');
    cardPanels.forEach(function (panel) {
      panel.style.display = 'block';
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // Add an event listener to the search button
  document.getElementById('searchButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting (if it's a form)
    // Show the search-results section
    const searchResultsSection = document.getElementById('search-results'); searchResultsSection.style.display = 'block';
    // Add your search functionality here to populate the search results
  });
});