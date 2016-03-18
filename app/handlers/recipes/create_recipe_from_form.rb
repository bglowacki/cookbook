module Handlers
  module Recipes
    class CreateRecipeFromForm
      def initialize(recipes_repository)
        @recipes_repository = recipes_repository
      end
      
      def handle(command)
        uuid = SecureRandom.uuid
        recipe = Aggregates::Recipes::Recipe.new(uuid)
        recipe.apply(Events::Recipes::RecipeCreatedFromForm.new(uuid, command.name, command.ingredients, command.preparation_steps))
        @recipes_repository.persist(recipe)
      end
    end
  end
end