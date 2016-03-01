module Repositories
  class RecipeDb
    def create(recipe)
      recipe.save!
    end

    def find(recipe_id)
      Recipe.find(recipe_id)
    end
  end
end