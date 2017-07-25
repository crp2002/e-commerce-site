import { FILTER_SHIRTS } from './constants';

export const updateShirts = (sleeveSize, category) => { // eslint-disable-line
  return {
    type: FILTER_SHIRTS,
    sleeveSize,
    category,
  };
};
