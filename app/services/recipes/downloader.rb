module Services
  module Recipes
    class Downloader
      def call(recipe_page_url)
        agent = ::Mechanize.new
        page = agent.get(recipe_page_url)
        name = page.search(".przepis.page-header").text
        kcal = get_kcal(page)
        portions_quantity = get_portions(page)
        ingredients = get_ingredients(page)
        preparation_steps = get_preparation_steps(page)
        Recipe.new(name: name, kcal: kcal, portions_quantity: portions_quantity, ingredients: ingredients, preparation_steps: preparation_steps).save!
      end

      private

      def get_portions(page)
        page.search(".field-name-field-ilosc-porcji").text.strip.split(",")[0].to_i
      end



      def get_kcal(page)
        kcal = page.search(".field-name-field-ilosc-porcji").text.strip.split(",")[1]
        if kcal
          kcal.split(" ")[1].to_i
        end
      end

      def get_ingredients(page)
        page.search(".field-name-field-skladniki li").map do |ingredient|
          Ingredient.new(ingredient.text.strip)
        end
      end

      def get_preparation_steps(page)
        page.search(".field-name-field-przygotowanie li").each_with_index.map do |preparation_step, index|
          PreparationStep.new((index + 1), preparation_step.text.strip)
        end
      end
    end
  end
end