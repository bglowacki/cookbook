module Services
  module Recipes
    class Downloader
      def call(recipe_page_url)
        agent = ::Mechanize.new
        page = agent.get(recipe_page_url)
        name = page.search(".przepis.page-header").text
        portions_quantity, kcal = get_portions(page)
        ingredients = get_ingredients(page)
        preparation_steps = get_preparation_steps(page)
        Recipe.new(name: name, kcal: kcal, portions_quantity: portions_quantity, ingredients: ingredients, preparation_steps: preparation_steps).inspect
      end

      private

      def get_portions(page)
        portions_quantity = page.search(".field-name-field-ilosc-porcji").text.strip.split(",")[0].to_i
        kcal = page.search(".field-name-field-ilosc-porcji").text.strip.split(",")[1].split(" ")[1].to_i
        [portions_quantity, kcal]
      end

      def get_ingredients(page)
        page.search(".field-name-field-skladniki ul li").map do |ingredient|
          Ingredient.new(ingredient.text.strip)
        end
      end

      def get_preparation_steps(page)
        page.search(".field-name-field-przygotowanie ul li").map.each_with_index do |preparation_step, index|
          PreparationStep.new((index + 1), preparation_step)
        end
      end
    end
  end
end