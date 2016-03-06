import {submit} from '../../backend'

export const SUBMITTING = 'SUBMITTING';
export const RECIPE_SAVED = 'RECIPE_SAVED';


export function submitForm(form, inputType) {
  return function(dispatch) {
    dispatch(submitting());
    submit(form, inputType).then(
      function(response) {
        dispatch(recipeSaved(response))
      }),
      function(error) {
        console.log(error)
      }
  }
}

export function submitting() {
  return {
    type: SUBMITTING
  }
}

export function recipeSaved(recipe) {
  return {
    type: RECIPE_SAVED,
    recipe: recipe
  }
}


