import { fromJS } from 'immutable';
import { shirtIDSelector } from '../selectors';

describe('shirtIDSelector', () => {
  it('should select the shirt id', () => {
    const id = 1;
    const mockhedState = fromJS({
      shirtID: id,
    });
    expect(shirtIDSelector(mockhedState)).toEqual(id);
  });
});
