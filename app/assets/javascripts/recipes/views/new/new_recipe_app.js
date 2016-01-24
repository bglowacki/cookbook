import {combineReducers} from 'redux';
import {preparationSteps} from './components/preparation_steps/reducers'
import {ingredients} from './components/ingredients/reducers'
import {name} from './components/name/reducers'

const newRecipeApp = combineReducers({
  ingredients,
  preparationSteps,
  name
});

export default newRecipeApp