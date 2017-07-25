/**
 * MainPage selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('all');
// const makeSelectSleeveSize = (state) => state.get('sleeveSize');


const makeSelectCategory = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('storeCategory')
);

const makeSelectSleeveSize = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('sleeveSize')
);

export {
  makeSelectCategory,
  makeSelectSleeveSize,
  selectGlobal,
};
