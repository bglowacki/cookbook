class RecipeNotFound < StandardError; end

module Repositories
  class RecipesRepository
    def initialize
      @events = []
    end

    def load(id)
      events = @events.select {|event| event.id == id}
      if events.empty?
        raise RecipeNotFound
      end

      Aggregates::Recipes::Recipe.new(id, events)
    end

    def persist(recipe)
      recipe.unpublished_events.each do |event|
        @events << event
      end
      recipe.clear_unpublished_events
      recipe
    end

    def count
      @events.count
    end
  end
end