class RecipesController < ApplicationController
  def new

  end

  def create
    create_recipe_service.run(params)
    render json: params.as_json
  end

  private

  def create_recipe_service
    @create_recipe_service = Services::Recipes::Create.new(recipe_repository)
  end

  def recipe_repository
    @recipe_repository ||= Repositories::Recipe.new
  end
end