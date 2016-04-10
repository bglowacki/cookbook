import React from 'react';
import ReactDOM from 'react-dom';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import FlatButton from 'material-ui/lib/flat-button';

import {connect} from 'react-redux';


class NavigationView extends React.Component {

  indexRecipes = () => {
    location.href =  "/recipes"
  };

  newRecipe = () => {
    location.href = "/recipes/new"
  }

  render = () => {
    return(
      <LeftNav width={200} open={true}>
        <List>
          <ListItem onClick={this.indexRecipes}> Recipes </ListItem>
          <ListItem onClick={this.newRecipe}> New Recipe </ListItem>
        </List>
      </LeftNav>
    )
  }
}

function run(state) {
  return {
    open: state.open
  }
}


export default connect(run)(NavigationView)