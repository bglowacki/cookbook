import React from 'react';
import TextField from 'material-ui/lib/text-field';
import {recipeUrlChanged} from './actions'
import SubmitButton from '../submit_button/submit_button'

export default class RecipeUrlForm extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object
  };

  handleRecipeUrlChange = (e) => {
    this.context.store.dispatch(recipeUrlChanged(e.target.value))
  };

  render = () => {
    return(
      <div>
        <TextField
          floatingLabelText="Recipe URL"
          onChange={this.handleRecipeUrlChange}
          value={this.props.recipeUrl}
        />
      <SubmitButton recipe={this.props.recipeUrl} inputType="recipeUrl" />
      </div>
    )
  };
}