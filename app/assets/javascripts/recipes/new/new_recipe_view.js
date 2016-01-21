import React from "react";
import NewRecipeForm from "./components/new_recipe_form";
import { connect } from 'react-redux';
import {addIngredient} from './app/actions';



class NewRecipeView extends React.Component {
  render () {
    return (
      <div id="new_recipe" className="container">
        <h1>Add new recipe</h1>
        <NewRecipeForm numberOfIngredients={this.props.numberOfIngredients} addIngredient={() => {
          this.props.dispatch(addIngredient())
        }} />
      </div>
    )
  }
}

function select(state) {
  return {
    numberOfIngredients: state.ingredients
  }
}

export default connect(select)(NewRecipeView)