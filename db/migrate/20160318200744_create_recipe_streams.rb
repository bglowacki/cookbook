class CreateRecipeStreams < ActiveRecord::Migration
  def change
    create_table :recipe_streams do |t|
      t.string :aggregate_id
      t.string :event_type
      t.text :payload

      t.datetime :created_at
    end
  end
end
