import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// console.log(icons);

const recipeContainer = document.querySelector(".recipe");

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

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
    console.log(err.toString());
  }
};

console.log("TEST");
controllerRecipe();
/**
 * Add an event listener to get a link to the current search
 */
["hashchange", "load"].forEach(e =>
  window.addEventListener(e, controllerRecipe)
);
