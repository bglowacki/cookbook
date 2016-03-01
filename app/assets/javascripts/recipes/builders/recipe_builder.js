import Recipe from '../models/recipe'
import ingredientsBuilder from './ingredient_builder'
import preparationStepsBuilder from './preparation_steps_builder'

export default function recipeBuilder(rawRecipe) {
  return new Recipe(
    rawRecipe.name,
    ingredientsBuilder(rawRecipe.ingredients),
    preparationStepsBuilder(rawRecipe.preparation_steps),
    rawRecipe.kcal,
    rawRecipe.portions_quantity,
    rawRecipe.source_url
  )
}