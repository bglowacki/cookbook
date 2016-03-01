import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import showRecipeApp from './views/show/show_recipe_app'
import {requestRecipe} from './views/show/app/actions'

import ShowView from './views/show/show_recipe_view'

let store = createStore(
  showRecipeApp,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(requestRecipe(window.location.pathname.split("/")[2]));

ReactDOM.render(
  <Provider store={store}>
    <ShowView />
  </Provider>,
  document.getElementById("container")
);