module Forms
  class RecipeForm
    include Virtus.model
    include ActiveModel::Validations

    attribute :name, String
    attribute :ingredients, Hash
    attribute :preparation_steps, Hash

    def build
      if valid?
        build!
      else
        false
      end
    end

    private

    def build!
      recipe = ::Recipe.new
      recipe.name = name
      recipe.ingredients = build_ingredients
      recipe.preparation_steps = build_preparation_steps
      recipe
    end

    def build_ingredients
      ingredients.values.map do |ingredient|
        Ingredient.new(ingredient['name'])
      end
    end

    def build_preparation_steps
      preparation_steps.values.map do |preparation_step|
        PreparationStep.new(preparation_step['order_number'] ,preparation_step['description'])
      end
    end
  end
end