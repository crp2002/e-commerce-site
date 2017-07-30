import { FILTER_CATEGORY, FILTER_SLEEVE } from './constants';

export const updateCategory = (category) => { // eslint-disable-line
  return {
    type: FILTER_CATEGORY,
    category,
  };
};
export const updateSleeve = (sleeve) => { // eslint-disable-line
  return {
    type: FILTER_SLEEVE,
    sleeve,
  };
};
