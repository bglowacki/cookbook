import {getRecipe} from "./backend"

export const RECIPE_REQUESTED = "RECIPE_REQUESTED";
export const RECIPE_LOADED = "RECIPE_LOADED";

export function recipeRequested() {
  return {
    type: RECIPE_REQUESTED
  }
}

export function recipeLoaded(recipe) {
  return {
    type: RECIPE_LOADED,
    recipe: recipe
  }
}

export function requestRecipe(recipeId) {
  return function(dispatch) {
    dispatch(recipeRequested());
    getRecipe(recipeId).then(
      function(response) {
        dispatch(recipeLoaded(response))
      },
      function(error) {
        console.log(error)
      }
    )
  }
}