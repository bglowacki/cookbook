import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import NewRecipeView from './views/new/new_recipe_view';
import newRecipeApp from './views/new/new_recipe_app'
import NavigationView from '../navigation/navigation_view'
import navigationApp from '../navigation/navigation_app'



let newRecipeStore = createStore(
  newRecipeApp,
  applyMiddleware(
    thunkMiddleware
  )
);


ReactDOM.render(
  <Provider store={newRecipeStore}>
    <NewRecipeView />
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

