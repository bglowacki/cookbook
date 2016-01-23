export const ADD_INGREDIENT_INPUT = 'ADD_INGREDIENT_INPUT';
export const CHANGE_INGREDIENT = 'CHANGE_INGREDIENT';

export function addIngredientInput() {
  return (
  {type: ADD_INGREDIENT_INPUT}
  )
}

export function changeIngredient(ingredientId, ingredientName, ingredientQuantity, ingredientUnit) {
  return({
    type: CHANGE_INGREDIENT,
    ingredientId,
    ingredientName,
    ingredientQuantity,
    ingredientUnit
  })
}