import React from "react";

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';



export default class AddNewInputButton extends React.Component {
  onClick = () => {
    this.props.onClick()
  };

  render = () => {
    return(
      <FloatingActionButton onClick={this.onClick}>
        <ContentAdd />
      </FloatingActionButton>
    )
  };
}