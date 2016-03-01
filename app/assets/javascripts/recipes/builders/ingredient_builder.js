import _ from 'lodash'
import Ingredient from '../models/ingredient'

export default function ingredientsBuilder(rawIngredients) {
  return _.map(rawIngredients, function(rawIngredient) {
    return new Ingredient(rawIngredient.name)
  })
}