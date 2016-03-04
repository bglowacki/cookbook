import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

import _ from 'lodash';

class ShowView extends React.Component {
  ingredientListToListonicList = () => {
    return _.map(this.props.data.recipe.ingredientsList, function(ingredient) {
      return ingredient.name
    }).join("<br/>")
  };

  componentDidUpdate = () => {
    window.listonic_name = this.props.data.recipe.name;
    window.listonic_content = this.ingredientListToListonicList();
    var script = document.createElement("script");
    script.src = "http://buttons.listonic.pl/v1/button.js";
    document.getElementById("actions").appendChild(script)
  };

  ingredientsList = () => {
    return _.map(this.props.data.recipe.ingredientsList, function(ingredient) {
      return <ListItem key={ingredient.name}>{ingredient.name}</ListItem>
    })
  };

  render = () => {
    var recipe = this.props.data.recipe;
    return(
      <Card>
        <CardHeader
          title="Recipe"
          subtitle={recipe.sourceUrl}
        />
        <CardMedia
          style={{maxWidth: "700px", marginLeft: "auto", marginRight: "auto"}}
        >
          <img src="http://www.slenderkitchen.com/sites/default/files/default_images/slender-kitchen-recipe-placeholder.jpg" />
        </CardMedia>
        <CardTitle title={recipe.name} subtitle={`${recipe.kcal} / ${recipe.portionsQuantity} porcje`} />
        <CardText>
          <List>
            {this.ingredientsList()}
          </List>
        </CardText>
        <CardActions id="actions">

          <iframe className='listonic_ifrm' frameBorder='0' scrolling='no'> </iframe>
        </CardActions>

      </Card>
    )
  };
}

function run(state) {
  return({
    data: state.recipe,
    loading: state.loading
  })
}

export default connect(run)(ShowView)