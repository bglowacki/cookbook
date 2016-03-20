class DropRecipes < ActiveRecord::Migration
  def up
    drop_table :recipes
  end

  def down
    create_table :recipes do |t|
      t.string :name
      t.integer :kcal
      t.integer :portions_quantity
      t.text :ingredients
      t.text :preparation_steps
    end
  end
end
