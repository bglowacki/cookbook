import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NewRecipeView from './new/new_recipe_view';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import newRecipeApp from './new/app/reducers'


let store = createStore(newRecipeApp);


ReactDOM.render(
  <Provider store={store}>
    <NewRecipeView />
  </Provider>,
  document.getElementById("container")
);
