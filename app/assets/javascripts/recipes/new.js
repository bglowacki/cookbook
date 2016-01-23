import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import NewRecipeView from './views/new/new_recipe_view';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import newRecipeApp from './views/new/new_recipe_app'


let store = createStore(newRecipeApp);


ReactDOM.render(
  <Provider store={store}>
    <NewRecipeView />
  </Provider>,
  document.getElementById("container")
);
