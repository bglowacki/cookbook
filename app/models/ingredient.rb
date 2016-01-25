class Ingredient
  attr_reader :name, :unit, :quantity, :order_number

  def initialize(order_number, name, quantity, unit)
    @order_number = order_number
    @name = name
    @quantity = quantity
    @unit = unit
  end

  def to_hash
    {
      order_number: @order_number,
      name: @name,
      quantity: @quantity,
      unit: @unit
    }
  end
end