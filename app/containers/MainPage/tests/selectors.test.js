import { fromJS } from 'immutable';
import { categorySelector, sleeveSelector } from '../selectors';

describe('categorySelector', () => {
  it('should select the category', () => {
    const category = 'Casual';
    const mockedState = fromJS({
      category,
    });
    expect(categorySelector(mockedState)).toEqual(category);
  });
});

describe('sleeveSelector', () => {
  it('should select the sleeve size', () => {
    const sleeve = 'Long';
    const mockedState = fromJS({
      sleeve,
    });
    expect(sleeveSelector(mockedState)).toEqual(sleeve);
  });
});
