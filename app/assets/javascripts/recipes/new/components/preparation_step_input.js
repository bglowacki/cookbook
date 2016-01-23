import React from "react";
import _ from 'lodash';

import {Input} from 'react-bootstrap'

export default class PreparationStepInput extends React.Component {
  changePreparationStep = (e) => {
    var preparationStepId = _.keys(this.refs)[0];
    var preparationStepDescription = this.refs[preparationStepId].refs.input.value;
    this.props.changePreparationStep(preparationStepId, preparationStepDescription);
  };

  render = () => {
    return(
      <Input type="textarea" onChange={this.changePreparationStep} ref={"prepearationStep_" + this.props.index} className="preparation-step-input" label={"Step " + this.props.index}/>
    )
  };
}