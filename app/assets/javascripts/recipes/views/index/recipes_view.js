import React from 'react';
import _ from 'lodash'
import { connect } from 'react-redux';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


class RecipesView extends React.Component {
  recipesList = () => {
    return _.map(this.props.recipes, function(recipe) {
      return <ListItem>{recipe.name}</ListItem>
    });
  };

  render = () => {
    return(
      <div id="recipes">
        <div className="col-xs-3">
          <List>
            {this.recipesList()}
          </List>
        </div>
      </div>
    )
  }
}

function run(state) {
  return {
    recipes: state.recipes.list,
    loading: state.recipes.loading
  }
}

export default connect(run)(RecipesView);