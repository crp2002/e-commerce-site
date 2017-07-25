// Reducer for SubWrapper. This will update the store with the latest category and size so that the shirts can be filtered

import { fromJS } from 'immutable';

import { FILTER_SHIRTS } from './constants';

// The initial state
const initialState = fromJS({
  storeCategory: 'All',
  sleeveSize: 'All',
});

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SHIRTS:
      return state
        .set('storeCategory', action.category)
        .set('sleeveSize', action.sleeveSize);
    default:
      return state;
  }
}
