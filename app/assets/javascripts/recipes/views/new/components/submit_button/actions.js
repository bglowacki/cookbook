import {submit} from '../../backend'

export const SUBMITTING = 'SUBMITTING';
export const RECIPE_SAVED = 'RECIPE_SAVED';


export function submitForm(form) {
  return function(dispatch) {
    console.log("after");

    dispatch(submitting());
    submit(form).then(
      function(response) {
        dispatch(recipeSaved(response))
      }),
      function(error) {
        console.log(error)
      }
  }
}

export function submitting() {
  console.log("submitting");
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


