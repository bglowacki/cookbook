import {combineReducers} from 'redux';
import {preparationSteps} from './preparation_steps/reducers'
import {ingredients} from './ingredients/reducers'



const newRecipeApp = combineReducers({
  ingredients,
  preparationSteps
});

export default newRecipeApp