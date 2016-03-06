import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import showRecipeApp from './views/show/show_recipe_app'
import ShowView from './views/show/show_recipe_view'
import NavigationView from '../navigation/navigation_view'
import navigationApp from '../navigation/navigation_app'

import {requestRecipe} from './views/show/app/actions'

let showRecipeStore = createStore(
  showRecipeApp,
  applyMiddleware(
    thunkMiddleware
  )
);

showRecipeStore.dispatch(requestRecipe(window.location.pathname.split("/")[2]));

ReactDOM.render(
  <Provider store={showRecipeStore}>
    <ShowView />
  </Provider>,
  document.getElementById("container")
);

let navigationStore = createStore(
  navigationApp
);

ReactDOM.render(
  <Provider store={navigationStore}>
    <NavigationView />
  </Provider>,
  document.getElementById("navigation")
);