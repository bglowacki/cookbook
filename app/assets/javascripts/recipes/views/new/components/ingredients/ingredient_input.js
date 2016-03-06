import React from "react";
import _ from 'lodash';

import TextField from 'material-ui/lib/text-field';
import {changeIngredient} from './actions'

export default class IngredientInput extends React.Component {
  static unitOptions = [
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
    var ingredientOrder = ingredientKey;
    var ingredientName = this.refs[ingredientKey].refs.input.value;
    this.context.store.dispatch(changeIngredient(ingredientOrder, ingredientName));
  };


  render() {
    return (
      <div className="form-inline clearfix">
        <div className="col-xs-2 col-xs-offset-1">
          <TextField
            type="text"
            onChange={this.changeIngredient}
            ref={"ingredient_" + this.props.index}
            className="ingredient-input"
            floatingLabelText={"Ingredient " + this.props.index}/>
        </div>
      </div>
    )
  }
}