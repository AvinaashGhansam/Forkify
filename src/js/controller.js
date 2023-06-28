import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// console.log(icons);

// https://forkify-api.herokuapp.com/v2
// API KEY e5c9320d-4066-4fe6-ae92-47e7c81a1830

///////////////////////////////////////
const controllerRecipe = async function () {
  try {
    // Get the id of the hash that is tied to a specific recipe dynamically
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Load the recipe
    await model.loadRecipe(id);

    // 2) Render recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    resultsView.renderSpinner();
    console.log(resultsView.renderSpinner());
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResult("pizza");

    // 3) render results
    console.log(model.state.search.result);
    resultsView.render(model.state.search.result);
  } catch (err) {
    console.log(err.toString());
  }
};

const init = function () {
  recipeView.addHandlerRender(controllerRecipe);
  searchView.addHandlerSearch(controlSearchResult);
};
init();

// TODO: finish preview logic setup lesson 297 time 17:58
