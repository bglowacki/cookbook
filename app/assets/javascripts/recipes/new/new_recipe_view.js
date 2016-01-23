import React from "react";
import NewRecipeForm from "./components/new_recipe_form";
import { connect } from 'react-redux';
import {addPreparationStepInput, changePreparationStep} from './app/preparation_steps/actions';
import {addIngredientInput, changeIngredient} from './app/ingredients/actions';


class NewRecipeView extends React.Component {
  render = () => {
    return (
      <div id="new_recipe" className="container">
        <h1>Add new recipe</h1>
        <NewRecipeForm
          numberOfIngredients={this.props.ingredients.numberOfIngredients}
          numberOfPreparationSteps={this.props.preparationSteps.numberOfPreparationSteps}
          addIngredientInput={ () => {
            this.props.dispatch(addIngredientInput())
          }}
          changeIngredient={ (ingredientId, ingredientName, quantity) => {
            this.props.dispatch(changeIngredient(ingredientId, ingredientName, quantity))
          }}
          addPreparationStepInput={() => {
            this.props.dispatch(addPreparationStepInput())
          }}
          changePreparationStep={(preparationStepId, preparationStepDescription) => {
            this.props.dispatch(changePreparationStep(preparationStepId, preparationStepDescription))
          }}

        />
      </div>
    )
  };
}

function run(state) {
  console.log(state);
  return {
    ingredients: state.ingredients,
    preparationSteps: state.preparationSteps
  }
}

export default connect(run)(NewRecipeView)