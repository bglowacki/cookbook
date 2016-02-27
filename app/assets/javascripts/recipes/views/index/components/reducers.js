import {LOADING_RECIPES, RECIPES_LOADED} from './actions'
import Recipe from '../../../models/recipe'

export const recipes = (recipes= {list: [], loading: false}, action) => {
  switch(action.type) {
    case LOADING_RECIPES:
      return {list: recipes.list, loading: true};
    case RECIPES_LOADED:
      return {list: action.recipes, loading: false};
    default:
      return recipes;
  }
};