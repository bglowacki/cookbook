import Q from 'q'
import $ from 'jquery'

export function submit(recipe) {
  var deferred = Q.defer();
  $.ajax({
    url: "/recipes",
    method: "post",
    data: recipe.toParams(),
    success: function (response) {
      deferred.resolve(response)
    },
    error: function (error) {
      deferred.reject(error)
    }
  });
  return deferred.promise
}