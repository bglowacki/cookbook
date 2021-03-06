import {CHANGE_PREPARATION_STEP, ADD_PREPARATION_STEP_INPUT} from './actions';
import PreparationStep from '../../../../models/preparation_step'


export const preparationSteps = (preparationSteps = {numberOfPreparationSteps: 3, preparationStepsList: {}}, action) => {
  switch(action.type) {
    case ADD_PREPARATION_STEP_INPUT:
      return({
        numberOfPreparationSteps: preparationSteps.numberOfPreparationSteps + 1,
        preparationStepsList: preparationSteps.preparationStepsList
      });
    case CHANGE_PREPARATION_STEP:
      var preparationStepsList = preparationSteps.preparationStepsList;
      preparationStepsList[action.preparationStepOrder] = new PreparationStep(action.preparationStepDescription);
      return({
        numberOfPreparationSteps: preparationSteps.numberOfPreparationSteps,
        preparationStepsList: preparationStepsList
      });
    default:
      return preparationSteps
  }
};