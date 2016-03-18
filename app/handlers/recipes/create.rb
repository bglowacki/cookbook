module Handlers
  module Recipes
    class Create
      def initialize(recipes_repository)
        @recipes_repository = recipes_repository
      end
      
      def handle(command)
        recipe = Aggregates::Recipes::Recipe.create(command.name, command.ingredients, command.preparation_steps)
        @recipes_repository.persist(recipe)
      end
    end
  end
end