export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_PREPARATION_STEP = 'ADD_PREPARATION_STEP';

export function addIngredient() {
  return (
    {type: ADD_INGREDIENT}
  )
}

export function addPreparationStep() {
  return (
  {type: ADD_PREPARATION_STEP}
  )
}