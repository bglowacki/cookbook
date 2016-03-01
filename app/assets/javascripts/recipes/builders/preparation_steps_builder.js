import _ from 'lodash'
import PreparationStep from '../models/preparation_step'

export default function preparationStepsBuilder(rawPreparaionSteps) {
  return _.map(rawPreparaionSteps, function(rawPreparationStep) {
    return new PreparationStep(rawPreparationStep.description)
  })
}
