import { GET_SHIRT_ID } from './constants';

export function IDshirtReducer(state = null, action) {
  switch (action.type) {
    case GET_SHIRT_ID:
      return action.shirtID;
    default:
      return state;
  }
}
