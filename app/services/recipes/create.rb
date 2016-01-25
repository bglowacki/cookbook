module Services
  module Recipes
    class Create
      def initialize(recipe_repository)
        @recipe_repository = recipe_repository
      end

      def run(params)
        recipe = Forms::RecipeForm.new(params).build
        @recipe_repository.create(recipe)
      end
    end
  end
end