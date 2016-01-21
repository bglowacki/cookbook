import React from "react";
import {Input, Button} from 'react-bootstrap'
import _ from 'lodash';

class AddNewIngredientButton extends React.Component {
  render () {
    const {addIngredient} = this.props;

    return(<Button onClick={addIngredient}>Add new ingredient</Button>)
  }
}

class NewRecipeForm extends React.Component {
  renderIngredients () {
    return(_.times(this.props.numberOfIngredients, (index) => <Input type="text" key={"ingredient_"+(index+1)} label={"Ingredient "+(index+1)}/>))
  }

  render () {
    const {addIngredient} = this.props;
    return(<form className="form-horizontal">
      <Input type="text" placeholder="Dish name" label="Name"/>
      <Input type="textarea" placeholder="Instruction" label="Instruction"/>
      <div className="ingredient-list">
        <AddNewIngredientButton addIngredient={addIngredient} />
        {this.renderIngredients()}
      </div>
    </form>)
  }
}

export default NewRecipeForm