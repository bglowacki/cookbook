module Services
  module Recipes
    class Create
      def initialize(recipe_repository, recipe_downloader, recipes_es_repository)
        @recipe_repository = recipe_repository
        @recipe_downloader = recipe_downloader
        @create_recipe_handler = Handlers::Recipes::CreateRecipeFromForm.new(recipes_es_repository)
      end

      def run(params)
        if params[:input_type] == "recipeUrl"
          @recipe_downloader.call(params[:recipe])
        else
          command = Commands::Recipes::CreateRecipeFromForm.new(params)
          @create_recipe_handler.handle(command)
        end
      end
    end
  end
end