import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import React from 'react';

import RecipesView from './views/index/recipes_view'
import recipesApp from './views/index/recipes_app'
import NavigationView from '../navigation/navigation_view'
import navigationApp from '../navigation/navigation_app'

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {requestRecipes} from './views/index/components/actions'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

let recipesStore = createStore(
  recipesApp,
  applyMiddleware(
    thunkMiddleware
  )
);

recipesStore.dispatch(requestRecipes());

ReactDOM.render(
  <Provider store={recipesStore}>
    <RecipesView/>
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