class Recipe < ActiveRecord::Base

  def ingredients=(ingredients)
    hashed_ingredients = YAML.dump(ingredients.map(&:to_hash))
    write_attribute(:ingredients, hashed_ingredients)
  end

  def ingredients
    YAML.load(read_attribute(:ingredients)).map do |ingredient|
      Ingredient.new(ingredient[:name])
    end
  end

  def preparation_steps=(preparation_steps)
    hashed_preparation_steps = YAML.dump(preparation_steps.map(&:to_hash))
    write_attribute(:preparation_steps, hashed_preparation_steps)
  end

  def preparation_steps
    YAML.load(read_attribute(:preparation_steps)).map do |preparation_step|
      PreparationStep.new(preparation_step[:order_number], preparation_step[:description])
    end
  end
end