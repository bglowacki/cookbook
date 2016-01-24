import React from "react";
import _ from 'lodash';

import {Input} from 'react-bootstrap'
import {changeIngredient} from './actions'

export default class IngredientInput extends React.Component {
  unitOptions = [
    'gram',
    'decagram',
    'kilogram',
    'milliliter',
    'liter',
    'piece',
    'table spoon',
    'tea spoon',
    'dash',
    'bunch',
    'glass'
  ];

  static contextTypes = {
    store: React.PropTypes.object
  };

  changeIngredient = (e) => {
    var keys = _.keys(this.refs);
    var ingredientKey = _.find(keys, function(key) { return /^ingredient.+/.test(key) });
    var quantityKey = _.find(keys, function(key) { return /quantity.+/.test(key) });
    var unitKey = _.find(keys, function(key) { return /unit.+/.test(key) });
    var ingredientOrder = ingredientKey;
    var ingredientName = this.refs[ingredientKey].refs.input.value;
    var ingredientQuantity = this.refs[quantityKey].refs.input.value;
    var ingredientUnit = this.refs[unitKey].refs.input.value;
    this.context.store.dispatch(changeIngredient(ingredientOrder, ingredientName, ingredientQuantity, ingredientUnit));
  };


  render() {
    return (
      <div className="form-inline clearfix">
        <div className="col-xs-2 col-xs-offset-1">
          <Input type="text" onChange={this.changeIngredient} ref={"ingredient_" + this.props.index} className="ingredient-input" label={"Ingredient " + this.props.index}/>
        </div>
        <div className="col-xs-2 col-xs-offset-1">
          <Input type="text" onChange={this.changeIngredient} ref={"quantity_" + this.props.index} label="Quantity" className="ingredient-quantity-input"/>
        </div>
        <div className="col-xs-1 col-xs-offset-1">
          <Input type="select" onChange={this.changeIngredient} ref={"unit_" + this.props.index} label="Unit" className="ingredient-unit-input">
            {_.map(this.unitOptions, function(unit) { return <option value={unit} key={unit}>{unit}</option> })}
          </Input>
        </div>
      </div>
    )
  }
}