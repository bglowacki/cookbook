module Services
  module Recipes
    class Create
      def initialize(recipe_repository, recipe_downloader)
        @recipe_repository = recipe_repository
        @recipe_downloader = recipe_downloader
      end

      def run(params)
        if params[:input_type] == "recipeUrl"
          @recipe_downloader.call(params[:recipe])
        else
          # recipe = Forms::RecipeForm.new(params).build
          # @recipe_repository.create(recipe)
        end


      end
    end
  end
end