class CreateIngredient < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :kcal
      t.float :carbs
      t.float :protein
      t.float :fat

      t.timestamps
    end
  end
end
