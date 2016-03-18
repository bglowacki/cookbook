module Commands
  module Recipes
    class CreateRecipeFromForm
      def initialize(params)
        @params = params
      end

      def name
        @params[:name]
      end

      def ingredients
        @params[:ingredients].each_with_object({}) do |(section_name, ingredients), list|
          list[section_name] = ingredients.values.map do |ingredient|
            Ingredient.new(ingredient['name'])
          end
        end
      end

      def preparation_steps
        @params[:preparation_steps].values.map do |preparation_step|
          PreparationStep.new(preparation_step['order_number'] ,preparation_step['description'])
        end
      end
    end
  end
end