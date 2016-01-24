class RecipesController < ApplicationController
  def new

  end

  def create
    respond_to do |format|
      format.json do
        render json: params.as_json
      end
    end

  end
end