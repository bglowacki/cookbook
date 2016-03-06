export const RECIPE_URL_CHANGED = "RECIPE_URL_CHANGED";

export function recipeUrlChanged(recipeUrl) {
  return({
    type: RECIPE_URL_CHANGED,
    recipeUrl: recipeUrl
  })
}