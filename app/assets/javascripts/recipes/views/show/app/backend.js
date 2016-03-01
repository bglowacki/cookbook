import Q from 'q';
import $ from 'jquery';
import recipeBuilder from '../../../builders/recipe_builder'

export function getRecipe(recipeId) {
  var deferred = Q.defer();
  $.ajax({
    url: `/recipes/${recipeId}`,
    method: 'get',
    dataType: 'json',
    success: (response) => deferred.resolve(recipeBuilder(response.recipe)),
    error: (error) => deferred.reject(error)
  });
  return deferred.promise
}