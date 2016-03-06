import {TOGGLE_NAVIGATION} from './actions'

export const navigation = (open=false, action) => {
  switch(action.type) {
    case TOGGLE_NAVIGATION:
      return {open: open};
    default:
      return {open: open};
  }
};