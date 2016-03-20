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
      include ActiveModel::Serialization
      attr_reader :id, :name, :ingredients, :preparation_steps, :unpublished_events, :kcal, :portions_quantity, :source_url

      def initialize(id, published_events=[])
        @id = id
        @name = nil
        @ingredients = []
        @preparation_steps = []
        @kcal = nil
        @portions_quantity = nil
        @source_url = nil

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
            apply_recipe_created_from_form(event)
          when Events::Recipes::RecipeCreatedWithDownloader
            apply_recipe_created_with_downloader(event)
          else
            raise UnknownEvent.new(event)
        end
      end

      def apply_recipe_created_from_form(event)
        @name = event.name
        @ingredients = event.ingredients
        @preparation_steps = event.preparation_steps
      end

      def apply_recipe_created_with_downloader(event)
        @name = event.name
        @ingredients = event.ingredients
        @preparation_steps = event.preparation_steps
        @kcal = event.kcal
        @portions_quantity = event.portions_quantity
        @source_url = event.source_url
      end
    end
  end
end