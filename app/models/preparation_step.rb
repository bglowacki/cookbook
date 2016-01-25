class PreparationStep
  attr_reader :description

  def initialize(order_number, description)
    @order_number = order_number
    @description = description
  end

  def to_hash
    {
      order_number: @order_number,
      description: @description
    }
  end
end