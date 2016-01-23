export const ADD_PREPARATION_STEP_INPUT = 'ADD_PREPARATION_STEP_INPUT';
export const CHANGE_PREPARATION_STEP = 'CHANGE_PREPARATION_STEP';

export function addPreparationStepInput() {
  return ({
    type: ADD_PREPARATION_STEP_INPUT
  })
}

export function changePreparationStep(preparationStepId, preparationStepDescription) {
  return({
    type: CHANGE_PREPARATION_STEP,
    preparationStepId: preparationStepId,
    preparationStepDescription: preparationStepDescription
  })
}