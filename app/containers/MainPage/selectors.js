/**
 * MainPage selectors
 */

import { createSelector } from 'reselect'; // eslint-disable-line

const categorySelector = (state) => state.get('category');
const sleeveSelector = (state) => state.get('sleeve');

export {
  categorySelector,
  sleeveSelector,
};
