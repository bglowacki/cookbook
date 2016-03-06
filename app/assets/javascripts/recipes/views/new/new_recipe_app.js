import {combineReducers} from 'redux';
import {preparationSteps} from './components/preparation_steps/reducers'
import {ingredients} from './components/ingredients/reducers'
import {name} from './components/name/reducers'
import {formState} from './components/submit_button/reducers'
import {recipeUrl} from './components/recipe_url_form/reducers'

const newRecipeApp = combineReducers({
  ingredients,
  preparationSteps,
  name,
  formState,
  recipeUrl
});

export default newRecipeApp