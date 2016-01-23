import {ADD_INGREDIENT_INPUT, CHANGE_INGREDIENT} from './actions';

export const ingredients = (ingredients = {numberOfIngredients: 3, ingredientsList: {}}, action) => {
  switch(action.type) {
    case ADD_INGREDIENT_INPUT:
      return {
        numberOfIngredients: (ingredients.numberOfIngredients + 1),
        ingredientsList: ingredients.ingredientsList
      };
    case CHANGE_INGREDIENT:
      var newIngredients = {
        numberOfIngredients: ingredients.numberOfIngredients,
        ingredientsList: ingredients.ingredientsList
      };
      newIngredients.ingredientsList[action.ingredientId] = [action.ingredientName, action.ingredientQuantity];
      return newIngredients;
    default:
      return ingredients;
  }
};