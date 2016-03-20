module Events
  module Recipes
    class RecipeCreatedFromForm
      attr_reader :name, :ingredients, :id, :preparation_steps

      def initialize(id, name, ingredients, preparation_steps)
        @id = id
        @name = name
        @ingredients = ingredients
        @preparation_steps = preparation_steps
      end

      def payload
        {
          name: @name,
          ingredients: @ingredients.each_with_object({}) {|(section_name, ingredients), list| list[section_name] = ingredients.map(&:to_hash)},
          preparation_steps: @preparation_steps.map(&:to_hash)
        }
      end
    end
  end
end