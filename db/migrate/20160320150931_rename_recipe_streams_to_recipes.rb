class RenameRecipeStreamsToRecipes < ActiveRecord::Migration
  def change
    rename_table :recipe_streams, :recipes
  end
end
