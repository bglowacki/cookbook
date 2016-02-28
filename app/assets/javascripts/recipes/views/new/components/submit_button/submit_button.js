import React from 'react'
import {Button} from 'react-bootstrap'
import {submitForm} from './actions'

export default class SubmitButton extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object
  };

  submit = () => {
    this.context.store.dispatch(submitForm(this.props.recipe))
  };

  render = () => {
    return(<Button onClick={this.submit} className="btn btn-success">Submit</Button>);
  };
}