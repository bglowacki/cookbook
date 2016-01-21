import React from "react";
import {Input, Button} from 'react-bootstrap'
import _ from 'lodash';

class AddNewInput extends React.Component {
  onClick = () => {
    this.props.onClick()
  };

  render = () => {
    return(<Button onClick={this.onClick}><i className="fa fa-plus-circle"/></Button>)
  };
}

class IngredientInput extends React.Component {
  render() {
    return (
      <div className="form-inline clearfix">
        <div className="col-xs-2 col-xs-offset-1">
          <Input type="text" ref={"ingredient_" + this.props.index} className="ingredient-input" label={"Ingredient " + this.props.index}/>
        </div>
        <div className="col-xs-2 col-xs-offset-1">
          <Input type="text" ref={"quantity_" + this.props.index} label="Quantity" className="ingredient-quantity-input"/>
        </div>
      </div>
    )
  }
}

class PreparationStepInput extends React.Component {
  render = () => {
    return(
      <Input type="textarea" ref={"step_" + this.props.index} className="preparation-step-input" label={"Step " + this.props.index}/>
    )
  };
}

class NewRecipeForm extends React.Component {
  renderIngredients = () => {
    return(_.times(this.props.numberOfIngredients, (index) => <IngredientInput key={"ingredient_"+(index+1)} index={index + 1}/>))
  };

  renderPreparationSteps = () => {
    return(_.times(this.props.numberOfPreparationSteps, (index) => <PreparationStepInput key={"preparation_step_" + (index+1)} index={index + 1}/>))
  };

  render = () => {
    return(<form className="form-horizontal">
      <Input type="text" placeholder="Dish name" label="Name"/>
      <div className="preparation-steps">
        {this.renderPreparationSteps()}
      </div>
      <AddNewInput onClick={this.props.addPreparationStep} />
      <div className="ingredient-list">
        {this.renderIngredients()}
      </div>
      <AddNewInput onClick={this.props.addIngredient} />
    </form>)
  };
}

export default NewRecipeForm