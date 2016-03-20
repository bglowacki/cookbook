module Events
  module Recipes
    class RecipeCreatedWithDownloader
      attr_reader :name, :ingredients, :source_url, :id, :kcal, :portions_quantity, :preparation_steps

      def initialize(id, name, ingredients, preparation_steps, kcal, portions_quantity, source_url)
        @id = id
        @name = name
        @kcal = kcal
        @portions_quantity = portions_quantity
        @source_url = source_url
        @preparation_steps = preparation_steps
        @ingredients = ingredients
      end

      def payload
        {
          id: @id,
          name: @name,
          ingredients: @ingredients.each_with_object({}) {|(section_name, ingredients), list| list[section_name] = ingredients.map(&:to_hash)},
          preparation_steps: @preparation_steps.map(&:to_hash),
          kcal: @kcal,
          portions_quantity: @portions_quantity,
          source_url: @source_url
        }
      end
    end
  end
end