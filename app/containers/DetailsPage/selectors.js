/**
 * DetailsPage selectors
 */

import { createSelector } from 'reselect'; // eslint-disable-line

const shirtIDSelector = (state) => state.get('shirtID');

export {
  shirtIDSelector,
};
