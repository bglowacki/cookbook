module Commands
  module Recipes
    class Create
      def initialize(params)
        @params = params
      end

      def name
        @params[:name]
      end

      def ingredients
        @params[:ingredients].values.map do |ingredient|
          Ingredient.new(ingredient['name'])
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