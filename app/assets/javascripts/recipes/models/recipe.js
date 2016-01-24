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
      ingredientsList: this.ingredientsListParams(),
      preparationStepsList: this.preparationStepsListParams()
    })
  };

  ingredientsListParams = () => {
    return _
      .chain(this.ingredientsList)
      .map((ingredient, ingredientOrder) => {
        return {
          orderNumber: this.takeNumber(ingredientOrder),
          name: ingredient.name,
          quantity: ingredient.quantity,
          unit: ingredient.unit
        }
      })
      .values()
      .value();
  };

  preparationStepsListParams= () => {
    return _
      .chain(this.preparationStepsList)
      .map((preparationStep, preparationStepOrder) => {
        return {
          orderNumber: this.takeNumber(preparationStepOrder),
          description: preparationStep.description
        }
      })
      .values()
      .value()
  };

  takeNumber = (string) => {
    return string.match(/\d+/)[0]
  };
};