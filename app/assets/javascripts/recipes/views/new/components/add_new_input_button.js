import React from "react";

import {Button} from 'react-bootstrap'

export default class AddNewInputButton extends React.Component {
  onClick = () => {
    this.props.onClick()
  };

  render = () => {
    return(<Button onClick={this.onClick}><i className="fa fa-plus-circle"/></Button>)
  };
}