import React from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import {submitForm} from './actions'

export default class SubmitButton extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object
  };

  submit = () => {
    this.context.store.dispatch(submitForm(this.props.recipe))
  };

  render = () => {
    return(
      <RaisedButton
        onClick={this.submit}
        primary={true}
        label="Submit"
        />
    );
  };
}