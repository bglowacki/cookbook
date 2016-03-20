module Services
  module Recipes
    class KwestiaSmakuDownloader
      def initialize(agent)
        @agent = agent
      end

      def call(recipe_url)
        page = @agent.get(recipe_url)
        name = page.search(".przepis.page-header").text
        kcal = get_kcal(page)
        portions_quantity = get_portions(page)
        ingredients = get_ingredients(page)
        preparation_steps = get_preparation_steps(page)
        {
          name: name,
          kcal: kcal,
          portions_quantity: portions_quantity,
          ingredients: ingredients,
          preparation_steps: preparation_steps,
          source_url: recipe_url
        }
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
        ingredients = {}
        page.search(".field-name-field-skladniki ul").map.each_with_index do |ingredient_section, index|
          if index == 0
            ingredients["main"] = ingredient_section.search("li").map do |ingredient|
              Ingredient.new(ingredient.text.strip)
            end
          else
            section_name = page.search(".field-name-field-skladniki div.wyroznione")[(index - 1)].text.strip
            ingredients[section_name] = ingredient_section.search("li").map do |ingredient|
              Ingredient.new(ingredient.text.strip)
            end
          end
        end
        ingredients
      end

      def get_preparation_steps(page)
        page.search(".field-name-field-przygotowanie li").each_with_index.map do |preparation_step, index|
          PreparationStep.new((index + 1), preparation_step.text.strip)
        end
      end
    end
  end
end