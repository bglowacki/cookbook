module Handlers
  module Recipes
    class CreateRecipeWithDownloader
      def initialize(recipes_repository)
        @recipes_repository = recipes_repository
      end
      
      def handle(command)
        uuid = SecureRandom.uuid
        recipe = Aggregates::Recipes::Recipe.new(uuid)
        recipe.apply(Events::Recipes::RecipeCreatedWithDownloader.new(uuid, command.name, command.ingredients, command.preparation_steps, command.kcal, command.portions_quantity, command.source_url))
        @recipes_repository.persist(recipe)
      end
    end
  end
end