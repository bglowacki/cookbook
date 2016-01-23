import React from "react";
import _ from 'lodash';

import {Input} from 'react-bootstrap'
import PreparationStepInput from '../app/preparation_steps/preparation_step_input'
import IngredientInput from '../app/ingredients/ingredient_input'
import NameInput from '../app/name/name_input'
import AddNewInputButton from './add_new_input_button'

import {addPreparationStepInput} from '../app/preparation_steps/actions'
import {addIngredientInput} from '../app/ingredients/actions'

class NewRecipeForm extends React.Component {

  static contextTypes = {
    store: React.PropTypes.object
  };

  renderIngredients = () => {
    return(_.times(this.props.numberOfIngredients, (index) => <IngredientInput key={"ingredient_"+(index+1)} index={index + 1}/>))
  };

  renderPreparationSteps = () => {
    return(_.times(this.props.numberOfPreparationSteps, (index) => <PreparationStepInput key={"preparation_step_" + (index+1)} index={index + 1}/>))
  };

  addPreparationStepInput = () => {
    this.context.store.dispatch(addPreparationStepInput())
  };

  addIngredientInput = () => {
    this.context.store.dispatch(addIngredientInput())
  };

  render = () => {
    return(<form className="form-horizontal">
      <NameInput />
      <div className="preparation-steps">
        {this.renderPreparationSteps()}
      </div>
      <AddNewInputButton onClick={this.addPreparationStepInput} />
      <div className="ingredient-list">
        {this.renderIngredients()}
      </div>
      <AddNewInputButton onClick={this.addIngredientInput} />
    </form>)
  };
}

export default NewRecipeForm