import {SUBMITTING, RECIPE_SAVED} from './actions'

export const formState = (state = {submitted: false, submitting: false}, action) => {
  switch(action.type) {
    case SUBMITTING:
      return {submitted: false, submitting: true};
    case RECIPE_SAVED:
      return {submitted: true, submitting: false};
    default:
      return state
  }
};