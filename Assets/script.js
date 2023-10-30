// https://api.edamam.com/api/nutrition-details?app_id=59725894&app_key=e5e29232712b58a46ad291f76c5617a9

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

  fetch(requestUrl).then(function (response) {
    return response.json();
  });
  // .then(function (data) {
  //   for (var i = 0; i < 4; i++) {
  //     var listItem = document.createElement("li");
  // listItem.textContent = data[i];
  // recipeList.appendChild(listItem);
  //       }
  //     });
}

searchButton.addEventListener("click", getApi);
