import TextField from 'material-ui/lib/text-field';

import React from 'react'

import {changeName} from './actions'

export default class NameInput extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object
  };

  changeName = (e) => {
    var recipeName = e.target.value;
    this.context.store.dispatch(changeName(recipeName))
  };

  render = () => {
    return(
      <TextField
        type="text"
        floatingLabelText= "Dish name"
        onChange={this.changeName}
      />)
  };
}