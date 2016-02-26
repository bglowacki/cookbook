class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.integer :kcal
      t.integer :portions_quantity
      t.text :ingredients
      t.text :preparation_steps
    end
  end
end
