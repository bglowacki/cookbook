import React from 'react';
import _ from 'lodash'
import { connect } from 'react-redux';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


class RecipesView extends React.Component {

  goToRecipe = (recipe, e) => {
    window.location.href = `/recipes/${recipe.id}`
  };

  recipesList = () => {
    var self = this;
    return _.map(this.props.recipes, function(recipe) {
      return <ListItem onClick={self.goToRecipe.bind(this, recipe)} key={recipe.id}>{recipe.name}</ListItem>
    });
  };

  render = () => {
    return(
      <div id="recipes">
        <List>
          {this.recipesList()}
        </List>
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