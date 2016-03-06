import React from "react";
import _ from 'lodash';

import TextField from 'material-ui/lib/text-field';
import {changePreparationStep} from './actions'

export default class PreparationStepInput extends React.Component {
  static contextTypes = {
    store: React.PropTypes.object
  };

  changePreparationStep = (e) => {
    var preparationStepOrder = _.keys(this.refs)[0];
    var preparationStepDescription = this.refs[preparationStepOrder].refs.input.value;
    this.context.store.dispatch(changePreparationStep(preparationStepOrder, preparationStepDescription));
  };

  render = () => {
    return(
      <div className="form-inline clearfix">
        <div className="col-xs-2 col-xs-offset-1">
          <TextField
            multiLine={true}
            type="text"
            onChange={this.changePreparationStep}
            ref={"prepearationStep_" + this.props.index}
            className="preparation-step-input"
            floatingLabelText = {"Step " + this.props.index}
          />
        </div>
      </div>
    )
  };
}