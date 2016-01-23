import React from "react";
import NewRecipeForm from "./components/new_recipe_form";
import { connect } from 'react-redux';
import {addPreparationStepInput} from './app/preparation_steps/actions';
import {addIngredientInput} from './app/ingredients/actions';

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
          addPreparationStepInput={() => {
            this.props.dispatch(addPreparationStepInput())
          }}
        />
      </div>
    )
  };
}

function run(state) {
  return {
    ingredients: state.ingredients,
    preparationSteps: state.preparationSteps,
    name: state.name
  }
}

export default connect(run)(NewRecipeView)