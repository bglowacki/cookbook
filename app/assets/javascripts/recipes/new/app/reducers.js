import {combineReducers} from 'redux';
import {ADD_INGREDIENT} from './actions';

const ingredients = (numberOfIngredients = 3, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return numberOfIngredients + 1;
    default:
      return numberOfIngredients;
  }
};

const newRecipeApp = combineReducers({
  ingredients
});

export default newRecipeApp