import {Input} from 'react-bootstrap'
import React from 'react'

export default class NameInput extends React.Component {
  changeName = (e) => {
    var recipeName = e.target.value;
    this.props.changeName(recipeName)
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