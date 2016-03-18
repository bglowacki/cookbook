class RecipeNotFound < StandardError; end

module Repositories
  class RecipesRepository
    def load(id)
      raw_events = RecipeStream.where(aggregate_id: id)
      if raw_events.empty?
        raise RecipeNotFound
      end
      events = build_events(raw_events)
      Aggregates::Recipes::Recipe.new(id, events)
    end

    def persist(recipe)
      recipe.unpublished_events.each do |event|
        RecipeStream.new(aggregate_id: recipe.id, event_type: event.class.to_s, payload: MultiJson.dump(event.payload)).save!
      end
      recipe.clear_unpublished_events
      recipe
    end

    def count
      RecipeStream.count
    end

    def build_events(streams)
      streams.map do |event|
        payload = MultiJson.load(event.payload)
        case event.event_type
          when "Events::Recipes::RecipeCreated"
            ingredients = payload["ingredients"].each_with_object({}) do |(section_name, ingredients), list|
              list[section_name] = ingredients.map do |ingredient|
                Ingredient.new(ingredient['name'])
              end
            end
            preparation_steps = payload["preparation_steps"].map do |preparation_step|
              PreparationStep.new(preparation_step['order_number'] ,preparation_step['description'])
            end
            Events::Recipes::RecipeCreated.new(event.aggregate_id, payload["name"], ingredients, preparation_steps)
        end
      end
    end
  end
end