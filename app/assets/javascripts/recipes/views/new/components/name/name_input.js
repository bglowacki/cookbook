import {Input} from 'react-bootstrap'
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
      <Input
        type="text"
        placeholder="Dish name"
        label="Name"
        onChange={this.changeName}
      />)
  };
}