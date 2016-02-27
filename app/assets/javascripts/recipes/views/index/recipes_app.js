import {combineReducers} from 'redux';
import {recipes} from './components/reducers'

const recipesApp = combineReducers({
  recipes
});

export default recipesApp
