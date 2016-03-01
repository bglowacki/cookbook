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


class ShowView extends React.Component {
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur atque dolores eius eligendi eveniet, excepturi expedita facere facilis illo in ipsa iure libero, obcaecati optio quas sunt temporibus tenetur unde, vero? Alias at culpa cum deleniti ea, enim error, explicabo incidunt inventore ipsa iusto maiores officia porro quas recusandae saepe sunt temporibus ullam veniam voluptate. Consequuntur dolore expedita hic molestiae optio sed ut. A accusantium ad animi architecto asperiores dolorem est iste molestiae nihil perspiciatis possimus quibusdam rem sunt, suscipit ut! Beatae fuga quos sed, unde ut veniam! At consectetur eius explicabo iure mollitia necessitatibus perferendis quaerat repudiandae, veniam.
        </CardText>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
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