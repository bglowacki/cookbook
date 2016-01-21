import React from "react";
import NewRecipeForm from "./components/new_recipe_form";
import { connect } from 'react-redux';
import {addIngredient, addPreparationStep} from './app/actions';


class NewRecipeView extends React.Component {
  render = () => {
    return (
      <div id="new_recipe" className="container">
        <h1>Add new recipe</h1>
        <NewRecipeForm
          numberOfIngredients={this.props.numberOfIngredients}
          numberOfPreparationSteps={this.props.numberOfPreparationSteps}
          addIngredient={ () => {
            this.props.dispatch(addIngredient())
          }}
          addPreparationStep={() => {
            this.props.dispatch(addPreparationStep())
          }}

        />
      </div>
    )
  };
}

function run(state) {
  return {
    numberOfIngredients: state.ingredients,
    numberOfPreparationSteps: state.preparationSteps
  }
}

export default connect(run)(NewRecipeView)