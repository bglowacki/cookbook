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
  onChange = (e) => {
    var keys = _.keys(this.refs);
    var ingredientKey = _.find(keys, function(key) { return /^ingredient.+/.test(key) });
    var quantityKey = _.find(keys, function(key) { return /quantity.+/.test(key) });
    var ingredientId = ingredientKey;
    var ingredientName = this.refs[ingredientKey].refs.input.value;
    var ingredientQuantity = this.refs[quantityKey].refs.input.value;
    this.props.onChange(ingredientId, ingredientName, ingredientQuantity)
  };

  render() {
    return (
      <div className="form-inline clearfix">
        <div className="col-xs-2 col-xs-offset-1">
          <Input type="text" onChange={this.onChange} ref={"ingredient_" + this.props.index} className="ingredient-input" label={"Ingredient " + this.props.index}/>
        </div>
        <div className="col-xs-2 col-xs-offset-1">
          <Input type="text" onChange={this.onChange} ref={"quantity_" + this.props.index} label="Quantity" className="ingredient-quantity-input"/>
        </div>
      </div>
    )
  }
}

class PreparationStepInput extends React.Component {
  changePreparationStep = (e) => {
    var preparationStepId = _.keys(this.refs)[0];
    console.log(preparationStepId)
    var preparationStepDescription = this.refs[preparationStepId].refs.input.value;
    this.props.changePreparationStep(preparationStepId, preparationStepDescription)
  };

  render = () => {
    return(
      <Input type="textarea" onChange={this.changePreparationStep} ref={"prepearationStep_" + this.props.index} className="preparation-step-input" label={"Step " + this.props.index}/>
    )
  };
}

class NewRecipeForm extends React.Component {
  renderIngredients = () => {
    return(_.times(this.props.numberOfIngredients, (index) => <IngredientInput onChange={this.props.changeIngredient} key={"ingredient_"+(index+1)} index={index + 1}/>))
  };

  renderPreparationSteps = () => {
    return(_.times(this.props.numberOfPreparationSteps, (index) => <PreparationStepInput changePreparationStep={this.props.changePreparationStep} key={"preparation_step_" + (index+1)} index={index + 1}/>))
  };

  render = () => {
    return(<form className="form-horizontal">
      <Input type="text" placeholder="Dish name" label="Name"/>
      <div className="preparation-steps">
        {this.renderPreparationSteps()}
      </div>
      <AddNewInput onClick={this.props.addPreparationStepInput} />
      <div className="ingredient-list">
        {this.renderIngredients()}
      </div>
      <AddNewInput onClick={this.props.addIngredientInput} />
    </form>)
  };
}

export default NewRecipeForm