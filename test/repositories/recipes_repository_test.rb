require 'test_helper'

module Repositories
  class RecipesRepositoryTest < Minitest::Test
    def setup
      @recipes_repository = Repositories::RecipesRepository.new
      @command = Commands::Recipes::Create.new(params)
      @handler = Handlers::Recipes::Create.new(@recipes_repository)
    end

    def test_handler_properly_throws_an_event_and_creates_recipe
      @handler.handle(@command)
      assert_equal(1, @recipes_repository.count)
    end

    def test_repository_properly_loads_recipe
      recipe = @handler.handle(@command)
      loaded_recipe = @recipes_repository.load(recipe.id)
      assert_equal(recipe.name, loaded_recipe.name)
    end

    def params
      {
        name: "My recipe",
        ingredients: {
          main: {
            0 => {"name" => "Potato"},
            1 => {"name" => "Tomato"}
          }
        },
        preparation_steps: {
          0 => {
            "order_number" => 1,
            "description" => "Mix this"
          },
          1 => {
            "order_number" => 2,
            "description" =>  "Stir that"
          }
        }
      }
    end
  end
end