import React from "react";
import { connect } from 'react-redux';
import Recipe from '../../models/recipe'

import NewRecipeForm from "./components/new_recipe_form";

class NewRecipeView extends React.Component {
  render = () => {
    return (
      <div id="new_recipe" className="container">
        <h1>Add new recipe</h1>
        <NewRecipeForm
          numberOfIngredients={this.props.numberOfIngredients}
          numberOfPreparationSteps={this.props.numberOfPreparationSteps}
          recipe={this.props.recipe}
        />
      </div>
    )
  };
}

function run(state) {
  console.log(state)
  return {
    recipe: new Recipe(state.name, state.ingredients.ingredientsList, state.preparationSteps.preparationStepsList),
    numberOfIngredients: state.ingredients.numberOfIngredients,
    numberOfPreparationSteps: state.preparationSteps.numberOfPreparationSteps,
    name: state.name,
    formState: state.formState
  }
}

export default connect(run)(NewRecipeView)