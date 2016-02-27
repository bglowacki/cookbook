class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :kcal, :portions_quantity, :ingredients, :preparation_steps

  def ingredients
    object.ingredients.map(&:to_hash)
  end

  def preparation_steps
    object.preparation_steps.map(&:to_hash)
  end
end