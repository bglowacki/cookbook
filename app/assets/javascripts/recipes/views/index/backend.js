import Q from 'q';
import $ from 'jquery';

export function getRecipes () {
  var deferred = Q.defer();
  $.ajax({
    url: "/recipes",
    method: "get",
    dataType: 'json',
    success: (response) => deferred.resolve(response),
    error: (response) => deferred.reject(response)
  });
  return deferred.promise
}