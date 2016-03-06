class RecipesController < ApplicationController

  def index
    recipes = Recipe.all
    respond_to do |format|
      format.html {}
      format.json {render json: recipes, each_serializer: RecipeSerializer, root: false}
    end
  end

  def show
    respond_to do |format|
      format.html {}
      format.json {
        recipe = recipe_repository.find(params[:id])
        render json: recipe
      }
    end
  end

  def new

  end


  def create
    create_recipe_service.run(params)
    render json: params.as_json
  end

  private

  def create_recipe_service
    @create_recipe_service = Services::Recipes::Create.new(recipe_repository, recipe_downloader)
  end

  def recipe_repository
    @recipe_repository ||= Repositories::RecipeDb.new
  end

  def recipe_downloader
    @recipe_downloader ||= Services::Recipes::Downloader.new
  end
end