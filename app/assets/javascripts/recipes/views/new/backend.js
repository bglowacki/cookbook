import Q from 'q'
import $ from 'jquery'

export function submit(recipe, inputType) {
  var deferred = Q.defer();
  $.ajax({
    url: "/recipes",
    method: "post",
    data: {recipe: recipe, input_type: inputType},
    success: function (response) {
      deferred.resolve(response)
    },
    error: function (error) {
      deferred.reject(error)
    }
  });
  return deferred.promise
}