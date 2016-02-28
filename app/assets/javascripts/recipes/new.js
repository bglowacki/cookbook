import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import NewRecipeView from './views/new/new_recipe_view';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import newRecipeApp from './views/new/new_recipe_app'
import thunkMiddleware from 'redux-thunk'



let store = createStore(
  newRecipeApp,
  applyMiddleware(
    thunkMiddleware
  )
);


ReactDOM.render(
  <Provider store={store}>
    <NewRecipeView />
  </Provider>,
  document.getElementById("container")
);
