import {ADD_PREPARATION_STEP_INPUT} from './actions';

export const preparationSteps = (numberOfPreparationSteps = 3, action) => {
  switch(action.type) {
    case ADD_PREPARATION_STEP_INPUT:
      return numberOfPreparationSteps + 1;
    default:
      return numberOfPreparationSteps
  }
};