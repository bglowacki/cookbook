import _ from 'lodash'
import Ingredient from '../models/ingredient'

export default function ingredientsBuilder(rawIngredients) {
  var ingredientList = {};
  _.each(rawIngredients, function(ingredients, ingredientSection) {
    ingredientList[ingredientSection] = _.map(ingredients, function (rawIngredient) {
      return new Ingredient(rawIngredient.name)
    })
  });
  return ingredientList
}