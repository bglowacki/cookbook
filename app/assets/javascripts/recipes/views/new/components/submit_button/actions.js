import Q from 'q'
import $ from 'jquery'

export function submit(recipe) {
  $.ajax({
    url: "/recipes",
    method: "post",
    data: recipe.toParams(),
    success: function (response) {
      console.log(response);
    },
    error: function (error) {
      console.log(error)
    }
  })
}