import React from "react";
import { connect } from 'react-redux';
import Recipe from '../../models/recipe'
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';


import NewRecipeForm from "./components/new_recipe_form";
import RecipeUrlForm from "./components/recipe_url_form/recipe_url_form";

class NewRecipeView extends React.Component {
  render = () => {
    return (
      <div id="new_recipe" className="container">
        <h1>Add new recipe</h1>
        <Tabs>
          <Tab label="By hand">
            <NewRecipeForm
              numberOfIngredients={this.props.numberOfIngredients}
              numberOfPreparationSteps={this.props.numberOfPreparationSteps}
              recipe={this.props.recipe}
            />
          </Tab>
          <Tab label="With URL">
            <RecipeUrlForm recipeUrl={this.props.recipeUrl}/>
          </Tab>
        </Tabs>
      </div>
    )
  };
}

function run(state) {
  return {
    recipe: new Recipe(state.name, state.ingredients.ingredientsList, state.preparationSteps.preparationStepsList),
    numberOfIngredients: state.ingredients.numberOfIngredients,
    numberOfPreparationSteps: state.preparationSteps.numberOfPreparationSteps,
    name: state.name,
    formState: state.formState,
    recipeUrl: state.recipeUrl
  }
}

export default connect(run)(NewRecipeView)