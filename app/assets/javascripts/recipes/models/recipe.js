import _ from 'lodash';

export default class Recipe {
  constructor(name, ingredientsList, preparationStepsList, kcal=0, portionsQuantity=0, sourceUrl=undefined) {
    this.name = name;
    this.ingredientsList = ingredientsList;
    this.preparationStepsList = preparationStepsList;
    this.kcal = kcal;
    this.portionsQuantity = portionsQuantity;
    this.sourceUrl = sourceUrl
  }

  toParams = () => {
    return({
      name: this.name,
      ingredients: {main: this.ingredientsListParams()},
      preparation_steps: this.preparationStepsListParams()
    })
  };

  ingredientsListParams = () => {
    return _
      .chain(this.ingredientsList)
      .map((ingredient, ingredientOrder) => {
        return {
          order_number: this.takeNumber(ingredientOrder),
          name: ingredient.name
        }
      })
      .values()
      .value();
  };

  preparationStepsListParams = () => {
    return _
      .chain(this.preparationStepsList)
      .map((preparationStep, preparationStepOrder) => {
        return {
          order_number: this.takeNumber(preparationStepOrder),
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