import {combineReducers} from 'redux';
import {ADD_INGREDIENT, ADD_PREPARATION_STEP} from './actions';

const ingredients = (numberOfIngredients = 3, action) => {
  switch(action.type) {
    case ADD_INGREDIENT:
      return numberOfIngredients + 1;
    default:
      return numberOfIngredients;
  }
};

const preparationSteps = (numberOfPreparationSteps = 3, action) => {
  switch(action.type) {
    case ADD_PREPARATION_STEP:
      return numberOfPreparationSteps + 1;
    default:
      return numberOfPreparationSteps
  }
};

const newRecipeApp = combineReducers({
  ingredients,
  preparationSteps
});

export default newRecipeApp