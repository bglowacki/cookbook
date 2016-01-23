import {combineReducers} from 'redux';
import {preparationSteps} from './preparation_steps/reducers'
import {ingredients} from './ingredients/reducers'
import {name} from './name/reducers'



const newRecipeApp = combineReducers({
  ingredients,
  preparationSteps,
  name
});

export default newRecipeApp