var recipeList = document.querySelector("ul");
var searchButton = document.getElementById("searchButton");
var searchBar = document.getElementById("ingredients");

function getApi(event) {
  event.preventDefault();
  var searchedIng = searchBar.value;
  var requestUrl =
    "https://api.edamam.com/api/recipes/v2?type=public&app_id=6ea07f97&app_key=bdc6918f9a087784e70607e12f2591ab&q=" +
    searchedIng +
    "&ingr=5";
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
}
searchButton.addEventListener("click", getApi);

var recipeButton = document.querySelectorAll(".imgButton");
function getApi2(event) {
  event.preventDefault();
  var requestUrl = "";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(requestUrl);
    });
}

recipeButton.addEventListener("click", getApi2);
