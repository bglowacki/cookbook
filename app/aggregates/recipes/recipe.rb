require 'securerandom'
class UnknownEvent < StandardError
  attr_reader :event

  def initialize(event)
    @event = event
  end
end

module Aggregates
  module Recipes
    class Recipe
      attr_reader :id, :name, :ingredients, :preparation_steps, :unpublished_events

      def self.create(name, ingredients, preparation_steps)
        uuid = SecureRandom.uuid
        recipe = self.new(uuid)
        recipe.apply(Events::Recipes::RecipeCreatedFromForm.new(uuid, name, ingredients, preparation_steps))
        recipe
      end

      def initialize(id, published_events=[])
        @id = id
        @name = nil
        @ingredients = []
        @preparation_steps = []

        @published_events = published_events
        @published_events.each {|event| apply_event(event)}
        @unpublished_events = []
      end

      def clear_unpublished_events
        @published_events += @unpublished_events
        @unpublished_events = []
      end

      def apply(event)
        @unpublished_events << event
        apply_event(event)
      end

      def apply_event(event)
        case event
          when Events::Recipes::RecipeCreatedFromForm
            apply_recipe_created(event)
          else
            raise UnknownEvent.new(event)
        end
      end

      def apply_recipe_created(event)
        @name = event.name
        @ingredients = event.ingredients
        @preparation_steps = event.preparation_steps
      end
    end
  end
end