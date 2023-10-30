https://api.edamam.com/api/nutrition-details?app_id=59725894&app_key=e5e29232712b58a46ad291f76c5617a9

https://api.edamam.com/api/recipes/v2?type=public&app_id=59725894&app_key=e5e29232712b58a46ad291f76c5617a9

var recipeList = document.querySelector("ul");
var fetchButton = document.getElementById("fetch-button");
var searchBar = document.querySelector("#searchBar");
var searchedIng = searchBar.

function getApi() {
  var requestUrl = "https://api.edamam.com/api/recipes/v2?type=public&app_id=59725894&app_key=e5e29232712b58a46ad291f76c5617a9" + "&ingr=" + searchedIng;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < 4; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = data[i].html_url;
        recipeList.appendChild(listItem);
      }
    });
}

searchButton.addEventListener('click', getApi);



