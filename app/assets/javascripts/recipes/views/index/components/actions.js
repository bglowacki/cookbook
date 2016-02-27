import {getRecipes} from '../backend'

export const RECIPES_LOADED = 'RECIPES_LOADED';
export const LOADING_RECIPES = 'LOADING_RECIPES';

export function requestRecipes (){
  return function(dispatch) {
    dispatch(loadingRecipes());
    getRecipes().then(
      function(response) {
        dispatch(recipesLoaded(response))
      }),
      function(error) {
        console.log(error)
      }
  }
}

export function loadingRecipes() {
  return({
    type: LOADING_RECIPES
  })
}

export function recipesLoaded(recipes) {
  return({
    type: RECIPES_LOADED,
    recipes: recipes
  })
}