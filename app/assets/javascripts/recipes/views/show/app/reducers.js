import {RECIPE_REQUESTED, RECIPE_LOADED} from './actions'

export const recipe = (state = {loading: false, recipe: {}}, action) => {
  switch(action.type) {
    case RECIPE_REQUESTED:
      return({loading: true, recipe: {}});
    case RECIPE_LOADED:
      return({loading: false, recipe: action.recipe});
    default:
      return state;
  }
};