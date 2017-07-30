// Reducers for SubWrapper. This will update the store with the latest category and size so that the shirts can be filtered
import { FILTER_CATEGORY, FILTER_SLEEVE } from './constants';

export function categoryReducer(state = null, action) {
  switch (action.type) {
    case FILTER_CATEGORY:
      return action.category.toLowerCase();
    default:
      return state;
  }
}

export function sleeveReducer(state = null, action) {
  switch (action.type) {
    case FILTER_SLEEVE:
      return action.sleeve.toLowerCase().replace(/ sleeve/g, '');
    default:
      return state;
  }
}
