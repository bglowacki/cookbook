import {CHANGE_NAME} from './actions';

export const name = (name = '', action) => {
  switch(action.type) {
    case CHANGE_NAME:
      return action.name;
    default:
      return name;
  }
};
