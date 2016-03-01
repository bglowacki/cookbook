import {combineReducers} from 'redux';
import {recipe} from './app/reducers'


const showRecipeApp = combineReducers({
  recipe
});

export default showRecipeApp