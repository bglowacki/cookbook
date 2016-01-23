import React from "react";
import _ from 'lodash';

import {Input} from 'react-bootstrap'
import PreparationStepInput from './preparation_step_input'
import IngredientInput from './ingredient_input'
import NameInput from './name_input'
import AddNewInputButton from './add_new_input_button'

class NewRecipeForm extends React.Component {
  renderIngredients = () => {
    return(_.times(this.props.numberOfIngredients, (index) => <IngredientInput changeIngredient={this.props.changeIngredient} key={"ingredient_"+(index+1)} index={index + 1}/>))
  };

  renderPreparationSteps = () => {
    return(_.times(this.props.numberOfPreparationSteps, (index) => <PreparationStepInput changePreparationStep={this.props.changePreparationStep} key={"preparation_step_" + (index+1)} index={index + 1}/>))
  };

  render = () => {
    return(<form className="form-horizontal">
      <NameInput changeName={this.props.changeName}/>
      <div className="preparation-steps">
        {this.renderPreparationSteps()}
      </div>
      <AddNewInputButton onClick={this.props.addPreparationStepInput} />
      <div className="ingredient-list">
        {this.renderIngredients()}
      </div>
      <AddNewInputButton onClick={this.props.addIngredientInput} />
    </form>)
  };
}

export default NewRecipeForm