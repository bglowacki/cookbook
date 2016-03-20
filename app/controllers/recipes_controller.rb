class RecipesController < ApplicationController

  def index
    recipe_aggregates = recipes_repository.all
    respond_to do |format|
      format.html {}
      format.json {render json: recipe_aggregates, each_serializer: RecipeSerializer, root: false}
    end
  end

  def show
    respond_to do |format|
      format.html {}
      format.json {
        recipe = recipes_repository.load(params[:id])
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
    @create_recipe_service = Services::Recipes::Create.new(recipe_repository, recipe_downloader, recipes_repository)
  end

  def recipes_repository
    @recipes_es_repository = Repositories::RecipesRepository.new
  end


  def recipe_downloader
    @recipe_downloader ||= Services::Recipes::Downloader.new
  end
end