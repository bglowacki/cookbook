import React from "react";
import _ from 'lodash';

import {Input} from 'react-bootstrap'
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
      <Input type="textarea" onChange={this.changePreparationStep} ref={"prepearationStep_" + this.props.index} className="preparation-step-input" label={"Step " + this.props.index}/>
    )
  };
}