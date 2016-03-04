class Recipe < ActiveRecord::Base

  def ingredients=(ingredient_sections)
    list = ingredient_sections.each_with_object({}) do |(name, ingredients), ingredient_list|
      ingredient_list[name] = ingredients.map(&:to_hash)
    end
    write_attribute(:ingredients, YAML.dump(list))
  end

  def ingredients
    YAML.load(read_attribute(:ingredients)).each_with_object({}) do |(name, ingredients), ingredients_list|
      ingredients_list[name] = ingredients.map do |ingredient|
        Ingredient.new(ingredient[:name])
      end
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