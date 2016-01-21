import React from "react";
import {Input, Button} from 'react-bootstrap'
import _ from 'lodash';

class AddNewIngredientButton extends React.Component {
  addIngredient = () => {
    this.props.addIngredient()
  };

  render = () => {
    return(<Button onClick={this.addIngredient}><i className="fa fa-plus-circle"/></Button>)
  };
}

class NewIngredientInput extends React.Component {
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

class NewRecipeForm extends React.Component {
  renderIngredients = () => {
    return(_.times(this.props.numberOfIngredients, (index) => <NewIngredientInput key={"ingredient_"+(index+1)} index={index + 1}/>))
  };

  render = () => {
    return(<form className="form-horizontal">
      <Input type="text" placeholder="Dish name" label="Name"/>
      <Input type="textarea" placeholder="Instruction" label="Instruction"/>
      <div className="ingredient-list">
        {this.renderIngredients()}
      </div>
      <AddNewIngredientButton addIngredient={this.props.addIngredient} />
    </form>)
  };
}

export default NewRecipeForm