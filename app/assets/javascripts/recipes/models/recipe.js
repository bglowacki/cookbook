import _ from 'lodash';

export default class Recipe {
  constructor(name, ingredientsList, preparationStepsList) {
    this.name = name;
    this.ingredientsList = ingredientsList;
    this.preparationStepsList = preparationStepsList;
  }

  toParams = () => {
    return({
      name: this.name,
      ingredientList: this.ingredientListParams()
    })
  };

  ingredientListParams = () => {
    return _
      .chain(this.ingredientsList)
      .map((ingredient, ingredientId) => {
        console.log(ingredientId);
        console.log(ingredient);
        return {
          id: ingredientId,
          name: ingredient.name,
          quantity: ingredient.quantity,
          unit: ingredient.unit
        }
      })
      .values()
      .value();
  };
};