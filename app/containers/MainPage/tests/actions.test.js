import { FILTER_CATEGORY, FILTER_SLEEVE } from '../constants';
import { updateCategory, updateSleeve } from '../actions';

describe('updateCategory Action creator', () => {
  it('should return the correct action type and category', () => {
    const tempCategory = 'Dress';
    const expectedResult = {
      type: FILTER_CATEGORY,
      category: tempCategory,
    };
    expect(updateCategory(tempCategory)).toEqual(expectedResult);
  });
});

describe('updateSleeve Action Creator', () => {
  it('should return the correct action type and sleeve size', () => {
    const tempSleeve = 'Short';
    const expectedResult = {
      type: FILTER_SLEEVE,
      sleeve: tempSleeve,
    };
    expect(updateSleeve(tempSleeve)).toEqual(expectedResult);
  });
});
