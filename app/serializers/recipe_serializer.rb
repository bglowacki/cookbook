class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :kcal, :portions_quantity, :ingredients, :preparation_steps, :source_url

  def ingredients
    object.ingredients.each_with_object({}) do |(name, ingredients), ingredients_list|
      ingredients_list[name] = ingredients.map(&:to_hash)
    end
  end

  def preparation_steps
    object.preparation_steps.map(&:to_hash)
  end
end