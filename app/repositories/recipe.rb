module Repositories
  class Recipe
    def create(recipe)
      recipe.save!
    end
  end
end