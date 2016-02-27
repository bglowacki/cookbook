import ReactDOM from 'react-dom';
import React from 'react';
import RecipesView from './views/index/recipes_view'
import 'bootstrap/dist/css/bootstrap.css';
import recipesApp from './views/index/recipes_app'
import thunkMiddleware from 'redux-thunk'


import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {requestRecipes} from './views/index/components/actions'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = createStore(
  recipesApp,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(requestRecipes());

ReactDOM.render(
  <Provider store={store}>
    <RecipesView/>
  </Provider>,
  document.getElementById("container")
);
