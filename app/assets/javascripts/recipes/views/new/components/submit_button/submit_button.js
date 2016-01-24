import React from 'react'
import {Button} from 'react-bootstrap'
import {submit} from './actions'

export default class SubmitButton extends React.Component {
  submit = () => {
    submit(this.props.recipe)
  };

  render = () => {
    return(<Button onClick={this.submit} className="btn btn-success">Submit</Button>);
  };
}