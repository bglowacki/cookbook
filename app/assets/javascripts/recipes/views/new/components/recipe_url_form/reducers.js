import {RECIPE_URL_CHANGED} from './actions'

export const recipeUrl = (recipeUrl='', action) => {
  switch(action.type) {
    case RECIPE_URL_CHANGED:
      return action.recipeUrl;
    default:
      return recipeUrl;
  }
};