module Events
  module Recipes
    class RecipeCreated
      attr_reader :name, :ingredients, :id, :preparation_steps

      def initialize(id, name, ingredients, preparation_steps)
        @id = id
        @name = name
        @ingredients = ingredients
        @preparation_steps = preparation_steps
      end
    end
  end
end