module Commands
  module Recipes
    class CreateRecipeWithDownloader
      def initialize(recipe_params)
        @recipe_params = recipe_params
      end

      def name
        @recipe_params[:name]
      end

      def kcal
        @recipe_params[:kcal]
      end

      def portions_quantity
        @recipe_params[:portions_quantity]
      end

      def ingredients
        @recipe_params[:ingredients]
      end

      def preparation_steps
        @recipe_params[:preparation_steps]
      end

      def source_url
        @recipe_params[:source_url]
      end
    end
  end
end